import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
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
    desc: "Jobbet tett med kunder for å løse tekniske utfordringer. Oppdaterte plugins og kode, rettet feil i passordtilbakestilling og foreslo tiltak for bedre tilgjengelighet på nettsider.",
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

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -80,
    y: 30,
    scale: 0.96,
  },
  hiddenRight: {
    opacity: 0,
    x: 80,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CareerTimeline() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 45%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.6,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="career-timeline-section" id="erfaring" ref={sectionRef}>
      <motion.div
        className="career-header"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="career-label">Career</span>
        <h2>Erfaring</h2>
        <p className="career-timeline-subtitle">
          En oversikt over min arbeidserfaring
        </p>
      </motion.div>

      <div className="timeline-track">
        <motion.div className="timeline-line" style={{ height: lineHeight }} />

        {experiences.map((exp, i) => {
          const side = i % 2 === 0 ? "left" : "right";

          return (
            <motion.div
              key={exp.title}
              className={`timeline-item ${side}`}
              variants={cardVariants}
              initial={side === "left" ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="timeline-empty" />

              <div className="timeline-node-col">
                <motion.div
                  className="timeline-node"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12 + 0.2,
                    duration: 0.45,
                    type: "spring",
                    stiffness: 220,
                  }}
                />
              </div>

              <motion.article
                className="timeline-card"
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="card-glow" />

                <div className="card-meta">
                  <span className="card-icon">{exp.icon}</span>
                  <span className="card-date">{exp.date}</span>
                </div>

                <h3 className="card-title">{exp.title}</h3>
                <p className="card-company">{exp.company}</p>
                <p className="card-desc">{exp.desc}</p>
              </motion.article>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}