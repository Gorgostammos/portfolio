// src/components/PillNav/PillNav.jsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

    // Slå av CSS-transition ved første posisjonering (uten animasjon)
    if (!animate) {
      pill.style.transition = "none";
    } else {
      pill.style.transition =
        "transform 0.25s cubic-bezier(0.33, 1, 0.68, 1), width 0.25s cubic-bezier(0.33, 1, 0.68, 1), height 0.25s cubic-bezier(0.33, 1, 0.68, 1)";
    }

    pill.style.transform = `translate(${x}px, ${y}px)`;
    pill.style.width = `${btn.offsetWidth}px`;
    pill.style.height = `${btn.offsetHeight}px`;

    // Sett transition tilbake etter at browser har rendret den statiske posisjonen
    if (!animate) {
      requestAnimationFrame(() => {
        pill.style.transition =
          "transform 0.25s cubic-bezier(0.33, 1, 0.68, 1), width 0.25s cubic-bezier(0.33, 1, 0.68, 1), height 0.25s cubic-bezier(0.33, 1, 0.68, 1)";
      });
    }
  };

  // Initial posisjonering (uten animasjon)
  useLayoutEffect(() => {
    if (!items.length) return;

    const initialHash =
      window.location.hash &&
      items.some((it) => it.href === window.location.hash)
        ? window.location.hash
        : (items[0]?.href ?? "");

    setActive(initialHash);

    const i = Math.max(
      0,
      items.findIndex((it) => it.href === initialHash),
    );
    positionPill(i, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  // Reposisjonér pill ved resize/scroll i selve nav'en
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const update = () => {
      const i = Math.max(
        0,
        items.findIndex((it) => it.href === active),
      );
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
    const i = Math.max(
      0,
      items.findIndex((it) => it.href === active),
    );
    positionPill(i, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Scroll-spy: oppdater active basert på hva brukeren "leser nå"
  useEffect(() => {
    if (!items.length) return;

    const headerOffset = 90;

    const getSections = () =>
      items
        .map((it) => ({ href: it.href, el: document.querySelector(it.href) }))
        .filter((s) => Boolean(s.el));

    let sections = getSections();
    if (!sections.length) return;

    const computeTops = () => {
      sections = getSections();
      return sections.map((s) => ({
        href: s.href,
        top: s.el.getBoundingClientRect().top + window.scrollY,
      }));
    };

    let tops = computeTops();
    let raf = 0;

    const setFromScroll = () => {
      raf = 0;
      const scrollPos = window.scrollY + headerOffset + 1;

      const bottomGap = 2;
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - bottomGap
      ) {
        const last = items[items.length - 1]?.href;
        if (last) {
          setActive((prev) => (prev === last ? prev : last));
          history.replaceState(null, "", last);
        }
        return;
      }

      let current = tops[0]?.href ?? items[0]?.href;
      for (let i = 0; i < tops.length; i++) {
        if (tops[i].top <= scrollPos) current = tops[i].href;
        else break;
      }

      if (current) {
        setActive((prev) => (prev === current ? prev : current));
        history.replaceState(null, "", current);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(setFromScroll);
    };

    const onResize = () => {
      tops = computeTops();
      setFromScroll();
    };

    const lateRecalc = window.setTimeout(onResize, 350);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    setFromScroll();

    return () => {
      window.clearTimeout(lateRecalc);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [items]);

  // Lukk mobilmeny ved klikk utenfor
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
      <nav
        className="pillnav pillnav--desktop"
        ref={navRef}
        aria-label="Primary"
      >
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

      {/* Mobile hamburger */}
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