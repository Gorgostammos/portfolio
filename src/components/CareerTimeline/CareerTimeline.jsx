// =====================================================================
// CareerTimeline.jsx – FORKLART VERSJON
// Samme kode som jeg ga deg, bare med kommentarer.
//
// Tenk på filen som tre lag:
//   1) DATA            – listen `experiences` (innholdet)
//   2) ETT KORT        – komponenten `TimelineItem` (ett kort + "aktiv"-logikk)
//   3) HELE SEKSJONEN  – `CareerTimeline` (layout, scroll-linje, ring)
// =====================================================================

// --- IMPORTER --------------------------------------------------------

// useRef = en "snor" til et ekte HTML-element. Vi trenger den for å fortelle
// framer-motion HVILKET element den skal måle scroll/synlighet på.
import { useRef } from "react";

import {
  motion, // gjør vanlige HTML-tagger "animerbare": <motion.div>, <motion.article>
  useScroll, // gir oss hvor langt man har scrollet (som et tall 0–1)
  useSpring, // gjør et tall "mykt" – det henger etter med fjær-fysikk
  useTransform, // gjør om ett tall til noe annet (f.eks. 0.5 -> "50%")
  useInView, // gir true/false: er dette elementet synlig akkurat nå?
  MotionConfig, // setter innstillinger for alle animasjoner inni seg
} from "framer-motion";

import ScrollFloat from "../ScrollFloat/ScrollFloat"; // overskriften din
import "./CareerTimeline.css"; // stilene til denne komponenten

// --- 1) DATA ---------------------------------------------------------
// Alt innholdet ligger her, adskilt fra utseendet. Vil du legge til en jobb,
// legger du bare til ett objekt – ingen markup trenger å endres.
// Rekkefølgen her = rekkefølgen på skjermen.
const experiences = [
  {
    date: "mars 2026 – nå",
    title: "Webutvikler",
    company: "PromotionRA",
    desc: "Utviklet den nye nettsiden i React med ansvar for struktur, design, innhold og publisering. Produserte plakater og videoreklamer, og håndterte sosiale medier på Instagram, Facebook og TikTok.",
  },
  {
    date: "juni 2025 – august 2025",
    title: "IT Support",
    company: "Frontkom",
    desc: "Jobbet tett med kunder for å løse tekniske utfordringer. Oppdaterte plugins og kode, rettet feil i passordtilbakestilling og foreslo tiltak for bedre tilgjengelighet på nettsider.",
  },
  {
    date: "sommer 2022 og 2023",
    title: "Sommerjobb",
    company: "Christensen Bakeri",
    desc: "Hjalp til med å lage og pynte bakverk, sorterte varer og vasket opp.",
  },
  {
    date: "februar 2021 – april 2021",
    title: "Vikar",
    company: "Johannes Pizza",
    desc: "Tok imot bestillinger, håndterte kassen, kjørte hjemlevering, bistod med matlaging og klargjorde lokalet før åpning.",
  },
];

// Hjelpefunksjon: 1 -> "01", 12 -> "12". Brukes til telleren "01 / 04".
// String(n) gjør tallet til tekst, padStart(2, "0") fyller på nuller foran til
// teksten er 2 tegn lang.
const pad = (n) => String(n).padStart(2, "0");

// --- 2) ETT KORT -----------------------------------------------------
// Hvorfor egen komponent og ikke bare inni .map() lenger ned?
// Fordi hooks (useRef, useInView ...) KUN kan kalles på toppnivå i en
// komponent – aldri inni en løkke eller .map-funksjon. Hvert kort trenger sin
// egen "er jeg aktiv?"-tilstand, så hvert kort må være sin egen komponent.
//
// De tre tingene i { } er "props" – data som forelderen sender inn:
//   exp   = objektet fra listen over (date, title, ...)
//   index = hvilket nummer kortet har (0, 1, 2 ...)
//   total = hvor mange kort det er til sammen
function TimelineItem({ exp, index, total }) {
  // Snor til selve <article>-elementet (settes via ref={ref} lenger ned)
  const ref = useRef(null);

  // "Aktiv" = kortet er synlig i et smalt bånd midt på skjermen.
  // `margin` fungerer som kanter på et usynlig vindu rundt skjermen:
  // "-42% 0px -42% 0px" betyr: krymp vinduet med 42 % fra toppen og 42 % fra
  // bunnen (rekkefølgen er topp, høyre, bunn, venstre).
  // Da står det igjen 100 - 42 - 42 = 16 % i midten. Er kortet inne i det
  // båndet, blir `active` true; ellers false. Når `active` endres, tegner
  // React kortet på nytt med riktig klasse.
  const active = useInView(ref, { margin: "-42% 0px -42% 0px" });

  return (
    // motion.article = en vanlig <article> som kan animeres.
    <motion.article
      ref={ref}
      // Klassen "is-active" legges på når active er true. Selve utseendet
      // (glød, sterkere kant) ligger i CSS-filen. Mal-teksten ${...} setter
      // inn en verdi i en tekststreng; ? : er "hvis ... så ... ellers ...".
      className={`timeline-item${active ? " is-active" : ""}`}
      // Startstilling: usynlig og 40px for langt ned.
      initial={{ opacity: 0, y: 40 }}
      // Når kortet kommer inn i bildet, animeres det til denne stillingen.
      whileInView={{ opacity: 1, y: 0 }}
      // once: true = bare første gang (ikke hver gang du scroller forbi).
      // amount: 0.25 = vent til 25 % av kortet er synlig.
      viewport={{ once: true, amount: 0.25 }}
      // 0.7 sekunder. ease-arrayen er en cubic-bezier-kurve: rask start og
      // veldig myk landing.
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Linjen over kortet: dato til venstre, teller til høyre */}
      <div className="item-meta">
        <span className="card-date">{exp.date}</span>
        <span className="item-count">
          {/* index starter på 0, men vi vil vise "01", så vi legger til 1 */}
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>

      <div className="timeline-card">
        <header className="card-head">
          {/* aria-hidden = skjermlesere hopper over emojien (ren dekor) */}
         
          <div>
            <h3 className="card-title">{exp.title}</h3>
            <p className="card-company">{exp.company}</p>
          </div>
        </header>
        <p className="card-desc">{exp.desc}</p>
      </div>
    </motion.article>
  );
}

// --- 3) HELE SEKSJONEN -----------------------------------------------
export default function CareerTimeline() {
  // Snor til tidslinje-boksen. Scroll-fremdriften måles mot DEN, ikke hele siden.
  const trackRef = useRef(null);

  // useScroll gir oss `scrollYProgress`: et tall fra 0 til 1.
  //   target = hvilket element vi måler mot
  //   offset = når tallet skal være 0 og når det skal være 1.
  //     Format: "[punkt på elementet] [punkt på skjermen]"
  //     "start 60%" -> 0 når TOPPEN av tidslinjen er 60 % ned på skjermen
  //     "end 50%"   -> 1 når BUNNEN av tidslinjen har nådd midten av skjermen
  // OBS: scrollYProgress er en "MotionValue", ikke et vanlig tall. Den kan
  // oppdateres hundrevis av ganger i sekundet UTEN at React tegner alt på nytt.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 60%", "end 50%"],
  });

  // Rå scroll-verdi hopper rykkvis. useSpring lager en ny verdi som FØLGER den
  // rå verdien med fjær-fysikk, så linjen glir mykt:
  //   stiffness = hvor hardt fjæra trekker (høyere = raskere)
  //   damping   = hvor mye den bremses (høyere = mindre svinging)
  //   mass      = hvor "tung" den er (høyere = tregere)
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.6,
  });

  // useTransform oversetter: når `smooth` er 0 -> "0%", når den er 1 -> "100%".
  // Vi får altså en verdi som kan brukes direkte som CSS (height og top).
  // Samme `progress` brukes både av linjen og ringen, så de følger hverandre.
  const progress = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    // reducedMotion="user": hvis brukeren har slått på "reduser bevegelse" i
    // operativsystemet, skrur framer-motion av bevegelses-animasjonene.
    <MotionConfig reducedMotion="user">
      {/* id="erfaring" er ankeret nav-menyen din hopper til */}
      <section className="career-timeline-section" id="erfaring">
        {/* VENSTRE KOLONNE. Denne boksen er "sticky" (se CSS) og blir stående
            mens kortene til høyre scroller forbi. */}
        <div className="career-sticky">
          <motion.div
            className="career-header"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="career-label">Karriere</span>
            {/* Din egen komponent: deler teksten i bokstaver og animerer dem */}
            <ScrollFloat>Erfaring</ScrollFloat>
            <p className="career-timeline-subtitle">
              En oversikt over min arbeidserfaring
            </p>
          </motion.div>
        </div>

        {/* HØYRE KOLONNE: selve tidslinjen. ref={trackRef} kobler snoren vår
            til denne boksen, så useScroll vet hva den skal måle. */}
        <div className="timeline-track" ref={trackRef}>
          {/* 1. Den svake grå skinnen (full høyde, aldri animert) */}
          <div className="timeline-rail" aria-hidden="true" />

          {/* 2. Den lysende linjen. Høyden styres av `progress`, så den vokser
              nedover mens du scroller. style={{ height: progress }} kobler
              motion-verdien rett på CSS-egenskapen. */}
          <motion.div
            className="timeline-line"
            style={{ height: progress }}
            aria-hidden="true"
          />

          {/* 3. Ringen. Samme verdi, men på `top`, så den sitter alltid i
              enden av den lysende linjen. */}
          <motion.div
            className="timeline-marker"
            style={{ top: progress }}
            aria-hidden="true"
          />

          {/* .map går gjennom listen og lager ett <TimelineItem> per jobb.
              `key` må være unik per element, så React kan holde styr på
              hvilket som er hvilket hvis listen endres. */}
          {experiences.map((exp, i) => (
            <TimelineItem
              key={`${exp.company}-${exp.date}`}
              exp={exp}
              index={i}
              total={experiences.length}
            />
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
