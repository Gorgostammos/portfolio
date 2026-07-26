import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.04,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    // Array.from i stedet for split("") -> takler æ/ø/å og emoji riktig
    const chars = Array.from(text);

    return chars.map((char, index) => (
      <span
        className="char"
        key={index}
        style={{
          // Hver bokstav får vite hvor i ordet den står, slik at
          // gradienten blir sammenhengende på tvers av bokstavene.
          "--char-pos": `${(index / Math.max(chars.length - 1, 1)) * 100}%`,
          "--char-total": chars.length,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;
    const charElements = el.querySelectorAll(".char");

    const fromVars = {
      willChange: "opacity, transform",
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: "50% 0%",
    };

    const toVars = {
      duration: animationDuration,
      ease,
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger,
    };

    // gsap.context gjør oppryddingen triviell. Uten den hoper
    // ScrollTrigger-instanser seg opp ved HMR og re-render.
    const ctx = gsap.context(() => {
      // Er overskriften allerede synlig når siden lastes?
      // I så fall finnes det ingen scroll å scrubbe mot, og en
      // scrub-animasjon ville stått fast på opacity: 0 for alltid.
      const viewportBottom =
        scroller === window
          ? window.innerHeight || document.documentElement.clientHeight
          : scroller.getBoundingClientRect().bottom;

      const alreadyInView = el.getBoundingClientRect().top < viewportBottom;

      if (alreadyInView) {
        gsap.fromTo(charElements, fromVars, { ...toVars, delay: 0.15 });
        return;
      }

      gsap.fromTo(charElements, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
        },
      });
    }, el);

    // Webfonter endrer høyden på teksten etter at ScrollTrigger har
    // målt posisjonene. Uten denne kan triggerne bomme litt.
    let cancelled = false;
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) ScrollTrigger.refresh();
      });
    }

    return () => {
      cancelled = true;
      ctx.revert();
    };
  }, [
    children,
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
