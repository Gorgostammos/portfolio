import { useEffect, useRef, useState } from "react";
import "./CareerTimeline.css";

const experiences = [
  {
    date: "mars 2026 – nå",
    title: "Webutvikler",
    company: "PromotionRA",
    icon: "🌐",
    desc: "Utviklet den nye nettsiden i React med ansvar for struktur, design, innhold og publisering. Produserte plakater og videoreklamer, og håndterte sosiale medier på Instagram, Facebook og TikTok.",
  },
  {
    date: "juni 2025 – august 2025",
    title: "IT Support",
    company: "Frontkom",
    icon: "🖥️",
    desc: "Jobbet tett med kunder for å løse tekniske utfordringer. Oppdaterte plugins og kode, rettet feil i passordtilbakestilling og foreslått tiltak for bedre tilgjengelighet på nettsider.",
  },
  {
    date: "juni 2022 – august 2022 · juni 2023 – juli 2023",
    title: "Sommerjobb",
    company: "Christensen Bakeri",
    icon: "🥐",
    desc: "Hjalp til med å lage og pynte bakverk, sorterte varer og vasket opp.",
  },
  {
    date: "februar 2021 – april 2021",
    title: "Vikar",
    company: "Johannes Pizza",
    icon: "🍕",
    desc: "Tok imot bestillinger, håndterte kassen, kjørte hjemlevering, bistod med matlaging og klargjorde lokalet før åpning.",
  },
];

export default function CareerTimeline() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const nodeRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
   const handleScroll = () => {
  if (!sectionRef.current || !trackRef.current) return;

  const track = trackRef.current;
  const trackRect = track.getBoundingClientRect();
  const trackTop = trackRect.top;
  const trackTotal = trackRect.height;
  const windowH = window.innerHeight;

  const progress = Math.min(
    Math.max((windowH * 0.65 - trackTop) / trackTotal, 0),
    1
  );
  setLineHeight(progress * 100);

  itemRefs.current.forEach((el, i) => {
    if (!el) return;
    const node = nodeRefs.current[i];
    if (!node) return;
    const nodeRect = node.getBoundingClientRect();
    const nodeCenter = nodeRect.top + nodeRect.height / 2;
    if (nodeCenter < windowH * 0.78) {
      el.classList.add("visible");
    }
  });
};

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="career-timeline-section" id="erfaring" ref={sectionRef}>
      <h2>Erfaring</h2>
      <p className="career-timeline-subtitle">En oversikt over min arbeidserfaring</p>

      <div className="timeline-track" ref={trackRef}>
        {/* The growing line */}
        <div
          className="timeline-line"
          style={{ height: `${lineHeight}%` }}
        />

        {experiences.map((exp, i) => {
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div
              key={i}
              className={`timeline-item ${side}`}
              ref={(el) => (itemRefs.current[i] = el)}
            >
              {side === "left" ? (
                <>
                  <div className="timeline-card">
                    <div className="card-meta">
                      <span className="card-icon">{exp.icon}</span>
                      <span className="card-date">{exp.date}</span>
                    </div>
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-company">{exp.company}</p>
                    <p className="card-desc">{exp.desc}</p>
                  </div>
                  <div
                    className="timeline-node-col"
                    ref={(el) => (nodeRefs.current[i] = el)}
                  >
                    <div className="timeline-node" />
                  </div>
                  <div className="timeline-empty" />
                </>
              ) : (
                <>
                  <div className="timeline-empty" />
                  <div
                    className="timeline-node-col"
                    ref={(el) => (nodeRefs.current[i] = el)}
                  >
                    <div className="timeline-node" />
                  </div>
                  <div className="timeline-card">
                    <div className="card-meta">
                      <span className="card-icon">{exp.icon}</span>
                      <span className="card-date">{exp.date}</span>
                    </div>
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-company">{exp.company}</p>
                    <p className="card-desc">{exp.desc}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}