// =====================================================================
// ScrollFloat.jsx – ny versjon fra React Bits (med effekter)
// Tilpasset prosjektet ditt. Steder jeg har endret noe er merket "ENDRING".
// Dette er den eneste filen du trenger å bytte ut (pluss ScrollFloat.css).
// gsap er allerede installert hos deg.
// =====================================================================

// ENDRING: fjernet linjen 'use client'. Den trengs bare i Next.js, og i Vite
// gir den en unødvendig advarsel under bygging.

import {
  Children,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

// useLayoutEffect kjører FØR nettleseren tegner (ingen "blink" av uanimert tekst).
// På en server finnes ikke `window`, og da brukes useEffect i stedet.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Pakker scrollEnd inn i clamp(...) slik at animasjonen alltid blir ferdig,
// også for tekst helt nederst på siden hvor man ikke kan scrolle lenger.
const clampToScroll = (position) =>
  typeof position === "string" && !position.startsWith("clamp(")
    ? `clamp(${position})`
    : position;

// Holder et tall mellom 0 og 1.
const clamp01 = (value) => Math.min(Math.max(value, 0), 1);

// "Myk trapp": gir 0 før `from`, 1 etter `to`, og en glatt overgang mellom.
// Brukes til å la opacity/farge fade inn på en del av animasjonen.
const smoothstep = (from, to, value) => {
  const k = clamp01((value - from) / (to - from));
  return k * k * (3 - 2 * k);
};

// Et "tilfeldig" tall som er det samme hver gang (basert på sin()).
// Derfor ser effekten "scatter" lik ut ved hvert besøk.
const random = (index, salt) => {
  const value = Math.sin((index + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

// Regner ut hvor mye hver bit (bokstav/ord) skal vente før den starter.
// `order` bestemmer hvem som går først: start, end, center, edges eller random.
const getDelays = (count, order, stagger) => {
  const middle = (count - 1) / 2;
  const ranks = Array.from({ length: count }, (_, index) => {
    if (order === "end") return count - 1 - index;
    if (order === "center") return Math.abs(index - middle);
    if (order === "edges") return middle - Math.abs(index - middle);
    return index;
  });
  if (order === "random") {
    const shuffled = ranks
      .map((_, index) => index)
      .sort((a, b) => random(a, 9) - random(b, 9));
    shuffled.forEach((target, rank) => {
      ranks[target] = rank;
    });
  }
  const first = Math.min(...ranks);
  return ranks.map((rank) => (rank - first) * Math.max(0, stagger));
};

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  effect = "float", // 'float' | 'flip' | 'scatter' | 'blur' | 'wave'
  splitBy = "chars", // 'chars' | 'words'
  direction = "up",
  order = "start",
  fromColor = "currentColor",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  distance = 120,
  stretch = 2.3,
  smoothing = 0,
}) => {
  const containerRef = useRef(null); // <h2>
  const textRef = useRef(null); // spanen som holder bokstavene

  // Teksten som skal animeres. Bare ren tekst/tall kan deles opp i bokstaver;
  // alt annet (f.eks. JSX med <b>) flyttes som én bit.
  const text = useMemo(() => {
    const parts = Children.toArray(children);
    return parts.every(
      (part) => typeof part === "string" || typeof part === "number",
    )
      ? parts.join("")
      : null;
  }, [children]);

  // Fargeskifte (fromColor). OBS: fungerer ikke med gradienten din, se CSS.
  const shiftColor =
    fromColor && fromColor !== "currentColor" ? fromColor : null;
  const shiftStyle = useMemo(
    () =>
      shiftColor
        ? {
            color: `color-mix(in oklab, ${shiftColor} calc(var(--scroll-float-mix, 0) * 100%), currentColor)`,
          }
        : undefined,
    [shiftColor],
  );

  // Deler teksten i ord og bokstaver: <span word><span char>E</span>...</span>
  const splitText = useMemo(() => {
    if (text === null) return null;

    // ENDRING: teller bokstavene (uten mellomrom) slik at hver bokstav vet
    // hvor den står i ordet. Det trengs for at gradienten din skal gå
    // sammenhengende over hele overskriften, som i den gamle versjonen.
    const total = Array.from(text.replace(/\s+/g, "")).length;
    let n = 0;

    return text.split(/(\s+)/).map((word, wordIndex) =>
      word.trim() === "" ? (
        word
      ) : (
        <span className="scroll-float-word" key={wordIndex}>
          {Array.from(word).map((char, charIndex) => (
            <span
              className="scroll-float-char"
              key={charIndex}
              // ENDRING: CSS-variabler som ScrollFloat.css bruker til gradienten
              style={{
                ...shiftStyle,
                "--char-pos": `${total > 1 ? (n++ / (total - 1)) * 100 : 0}%`,
                "--char-total": total,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ),
    );
  }, [text, shiftStyle]);

  // `mounted` tvinger effekten under til å kjøre på nytt etter første tegning,
  // når alle elementene garantert finnes.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useIsomorphicLayoutEffect(() => {
    const el = containerRef.current;
    const textEl = textRef.current;
    if (!el || !textEl) return;
    if (scrollContainerRef && !scrollContainerRef.current) return;

    // Hva som scroller: egen container hvis gitt, ellers hele siden.
    const scroller = scrollContainerRef?.current || window;

    // Bitene som skal animeres (ord eller bokstaver). Finnes ingen: hele teksten.
    const pieces = el.querySelectorAll(
      splitBy === "words" ? ".scroll-float-word" : ".scroll-float-char",
    );
    const targets = pieces.length ? Array.from(pieces) : [textEl];

    // Hjelpere for effektene: en bit kan slå opp sitt eget nummer og dermed
    // få ulike verdier (brukes av "scatter").
    const indexOf = new Map(targets.map((target, index) => [target, index]));
    const at = (fn) => (_, target) => fn(indexOf.get(target) ?? 0);
    const middle = (targets.length - 1) / 2;
    const edge = (index) => (middle > 0 ? (index - middle) / middle : 0);

    const delays = getDelays(targets.length, order, stagger);
    const sign = direction === "down" ? -1 : 1;
    const reach = Math.max(0, Number(distance) || 0) / 120;
    const squeeze = stretch > 0 ? stretch ** -0.43 : 1;
    const baseEase = gsap.parseEase(ease) || ((p) => p);
    const timing = (p) => clamp01(baseEase(p));
    const size = () => parseFloat(getComputedStyle(textEl).fontSize) || 16;

    // Egne easing-kurver for "wave"-effekten (svulmer og vugger).
    const swell = (p) => {
      const t = timing(p);
      return 1 - Math.cos(t * Math.PI * 2.5) * Math.pow(1 - t, 2.6);
    };
    const sway = (p) => {
      const t = timing(p);
      return Math.sin(t * Math.PI * 2.5) * Math.pow(1 - t, 2.6);
    };

    // matchMedia: animasjonen kjøres BARE hvis brukeren ikke har bedt om
    // redusert bevegelse. Ellers vises teksten bare normalt.
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Én tidslinje koblet til scroll. scrub = animasjonen følger scrollen
      // (true = direkte, tall = så mange sekunder etter).
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: clampToScroll(scrollEnd),
          scrub: smoothing > 0 ? smoothing : true,
          invalidateOnRefresh: true,
        },
      });

      // Legger til en animasjon på ALLE bitene: fra `fromVars` til `toVars`.
      const add = (fromVars, toVars) => {
        gsap.set(targets, { willChange: "opacity, transform", ...fromVars });
        return timeline.fromTo(
          targets,
          { willChange: "opacity, transform", ...fromVars },
          {
            duration: animationDuration,
            stagger: (index) => delays[index] || 0,
            ...toVars,
          },
          0,
        );
      };

      // Én gren per effekt:
      if (effect === "flip") {
        add(
          {
            rotationX: -90 * sign,
            transformPerspective: () => size() * 4,
            transformOrigin: () =>
              `50% 50% ${(-size() * 0.55 * reach).toFixed(2)}`,
            backfaceVisibility: "hidden",
          },
          { ease, rotationX: 0 },
        );
        add(
          { opacity: 0 },
          { ease: (p) => smoothstep(0.05, 0.55, timing(p)), opacity: 1 },
        );
      } else if (effect === "scatter") {
        add(
          {
            x: at(
              (index) =>
                ((random(index, 1) * 2 - 1) * 1.3 - edge(index) * 0.9) *
                size() *
                reach,
            ),
            y: at(
              (index) =>
                sign * (0.35 + random(index, 2)) * size() * 1.1 * reach,
            ),
            rotation: at(
              (index) =>
                (random(index, 3) < 0.5 ? -1 : 1) *
                (40 + random(index, 4) * 120),
            ),
            scale: at((index) => 0.35 + random(index, 5) * 0.9),
            transformOrigin: "50% 50%",
          },
          { ease, x: 0, y: 0, rotation: 0, scale: 1 },
        );
        add(
          { opacity: 0 },
          { ease: (p) => smoothstep(0, 0.4, timing(p)), opacity: 1 },
        );
      } else if (effect === "blur") {
        add(
          {
            willChange: "opacity, transform, filter",
            opacity: 0,
            y: () => sign * size() * 0.3 * reach,
            scale: 1.45,
            filter: () => `blur(${(size() * 0.2).toFixed(2)}px)`,
            transformOrigin: "50% 50%",
          },
          { ease, opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        );
      } else if (effect === "wave") {
        add(
          {
            yPercent: 120 * reach * sign,
            scaleY: stretch,
            scaleX: squeeze,
            transformOrigin: sign > 0 ? "50% 100%" : "50% 0%",
          },
          { ease: swell, yPercent: 0, scaleY: 1, scaleX: 1 },
        );
        add({ rotation: 0 }, { ease: sway, rotation: -16 * sign });
        add(
          { opacity: 0 },
          { ease: (p) => clamp01(timing(p) * 2.5), opacity: 1 },
        );
      } else {
        // 'float' (standard, samme følelse som den gamle versjonen):
        // bokstavene strekkes opp fra en "luke" under linja.
        add(
          {
            opacity: 0,
            yPercent: 120 * reach * sign,
            scaleY: stretch,
            scaleX: squeeze,
            transformOrigin: sign > 0 ? "50% 0%" : "50% 100%",
          },
          { ease, opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1 },
        );
      }

      // Valgfritt fargeskifte: animerer CSS-variabelen --scroll-float-mix 1 -> 0
      if (shiftColor) {
        add(
          { "--scroll-float-mix": 1 },
          {
            ease: (p) => smoothstep(0.5, 1, timing(p)),
            "--scroll-float-mix": 0,
          },
        );
      }
    });

    // Opprydding: stopper og fjerner alle animasjoner når komponenten fjernes
    // eller props endres. Hindrer at ScrollTrigger-instanser hoper seg opp.
    return () => mm.revert();
  }, [
    mounted,
    scrollContainerRef,
    text,
    effect,
    splitBy,
    direction,
    order,
    shiftColor,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    distance,
    stretch,
    smoothing,
  ]);

  return (
    <h2
      ref={containerRef}
      // Bare 'float' trenger overflow: hidden (bokstavene skjules under linja).
      // De andre effektene bruker --open så de ikke klippes.
      className={`scroll-float ${effect === "float" ? "" : "scroll-float--open"} ${containerClassName}`}
    >
      {/* Skjult kopi av teksten for skjermlesere, siden bokstavene er splittet */}
      {text !== null && <span className="scroll-float-sr">{text}</span>}
      <span
        ref={textRef}
        className={`scroll-float-text ${textClassName}`}
        style={text === null ? shiftStyle : undefined}
        aria-hidden={text !== null ? true : undefined}
      >
        {splitText ?? children}
      </span>
    </h2>
  );
};

export default ScrollFloat;
