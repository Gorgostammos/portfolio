// src/components/PillNav/PillNav.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./PillNav.css";

export default function PillNav({ items = [] }) {
  const navRef = useRef(null);
  const pillRef = useRef(null);
  const btnRefs = useRef([]);
  const [active, setActive] = useState(items[0]?.href ?? "");
  const [open, setOpen] = useState(false);

  btnRefs.current = btnRefs.current.slice(0, items.length);

  const positionPill = (index, animate = true) => {
    const nav = navRef.current;
    const pill = pillRef.current;
    const btn = btnRefs.current[index];
    if (!nav || !pill || !btn) return;

    const x = btn.offsetLeft - nav.scrollLeft;
    const y = btn.offsetTop;

    const props = {
      x,
      y,
      width: btn.offsetWidth,
      height: btn.offsetHeight,
      duration: animate ? 0.25 : 0,
      ease: "power2.out",
    };

    // FIX: hindrer “glitch” når scroll-spy oppdaterer active ofte
    gsap.killTweensOf(pill);

    if (animate) gsap.to(pill, props);
    else gsap.set(pill, props);
  };

  // Initial posisjonering (uten animasjon)
  useLayoutEffect(() => {
    if (!items.length) return;

    const initialHash =
      window.location.hash && items.some((it) => it.href === window.location.hash)
        ? window.location.hash
        : items[0]?.href ?? "";

    setActive(initialHash);

    const i = Math.max(0, items.findIndex((it) => it.href === initialHash));
    positionPill(i, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  // Reposisjonér pill ved resize/scroll i selve nav'en
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const update = () => {
      const i = Math.max(0, items.findIndex((it) => it.href === active));
      positionPill(i, false);
    };

    window.addEventListener("resize", update);
    nav.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
      nav.removeEventListener("scroll", update);
    };
  }, [active, items]);

  // Når active endres (også via scroll-spy), flytt pill (med animasjon)
  useEffect(() => {
    if (!items.length) return;
    const i = Math.max(0, items.findIndex((it) => it.href === active));
    positionPill(i, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Scroll-spy
  useEffect(() => {
    if (!items.length) return;

    const headerOffset = 90;
    const sections = items
      .map((it) => document.querySelector(it.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const id = visible[0].target.id;
        const href = `#${id}`;

        if (items.some((it) => it.href === href)) {
          setActive((prev) => (prev === href ? prev : href));
          history.replaceState(null, "", href);
        }
      },
      {
        root: null,
        rootMargin: `-${headerOffset}px 0px -45% 0px`,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [items]);

  // Lukk mobilmeny ved klikk utenfor (ingen endring)
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      const root = document.getElementById("pillnav-root");
      if (root && !root.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  const scrollToHash = (href) => {
    if (!href?.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const goTo =
    (href, index, { fromMobile } = { fromMobile: false }) =>
    (e) => {
      e.preventDefault();
      setActive(href);

      if (!fromMobile) positionPill(index, true);

      scrollToHash(href);
      history.replaceState(null, "", href);

      if (fromMobile) setOpen(false);
    };

  const activeLabel =
    items.find((it) => it.href === active)?.label ?? items[0]?.label ?? "Meny";

  return (
    <div className="pillnav-wrap" id="pillnav-root">
      {/* Desktop pill nav */}
      <nav className="pillnav pillnav--desktop" ref={navRef} aria-label="Primary">
        <span className="pillnav-pill" ref={pillRef} aria-hidden="true" />
        {items.map((it, i) => (
          <a
            key={it.href}
            href={it.href}
            ref={(el) => (btnRefs.current[i] = el)}
            className={`pillnav-item ${active === it.href ? "is-active" : ""}`}
            aria-current={active === it.href ? "page" : undefined}
            onClick={goTo(it.href, i)}
          >
            {it.label}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger (uendret) */}
      <div className="pillnav-mobile">
        <button
          className="pillnav-burger"
          type="button"
          aria-label="Åpne meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="pillnav-burger-left">{activeLabel}</span>
          <span className={`pillnav-burger-icon ${open ? "is-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>

        {open && (
          <div className="pillnav-sheet" role="menu" aria-label="Navigasjon">
            {items.map((it, i) => (
              <a
                key={it.href}
                href={it.href}
                role="menuitem"
                className={`pillnav-sheet-item ${active === it.href ? "is-active" : ""}`}
                onClick={goTo(it.href, i, { fromMobile: true })}
              >
                {it.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
