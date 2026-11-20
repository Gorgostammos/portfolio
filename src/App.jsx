// src/App.jsx
import "./App.css";
import PillNav from "./components/PillNav/PillNav";
import CareerTimeline from "./components/CareerTimeline/CareerTimeline";
import Ferferdighetkort from "./components/Ferdighetkort/Ferdighetkort";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faCode,
  faUserGroup,
  faArrowTrendUp,
  faGraduationCap,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";





function App() {
  const navItems = [
    { label: "Om meg", href: "#om-meg" },
    { label: "Utdanning", href: "#utdanning" },
    { label: "Erfaring", href: "#erfaring" },
    { label: "Ferdigheter", href: "#ferdigheter" },
    { label: "Prosjekter", href: "#prosjekter" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="flex flex-col min-h-dvh w-full">
      <header className="sticky top-0 z-9999 w-full">
        <PillNav items={navItems} />
      </header>

      <main className="site-main flex flex-col flex-1 w-full min-w-0 gap-15 md:gap-28 px-4 text-center md:px-8 lg:px-12">
        {/*intro*/}
        <section id="intro" className="mx-auto w-full max-w-6xl scroll-mt-25">
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-12 py-10 lg:py-20">
            {/* VENSTRE SIDE - TEKST */}
            <div className="flex w-full min-w-0 flex-col gap-8 text-left lg:flex-[2]">
              {/* Navn */}
              <h1 className="m-0 text-4xl font-bold text-heading sm:text-5xl lg:text-6xl xl:text-7xl">
                Gorgos Tammo
              </h1>

              {/* Beskrivelse */}
              <p className="max-w-2xl text-base leading-relaxed text-primary-text">
                Jeg er fullstack-utvikler med fokus på moderne webteknologier.
                Jeg har utviklet flere nettsteder og applikasjoner, og har
                erfaring med både frontend- og backend-utvikling. Jeg er opptatt
                av å skape brukervennlige og effektive løsninger.
              </p>

              {/* SOSIALE IKONER */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/gorgos-tammo-8b2286230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="devicon-linkedin-plain"></i>
                </a>

                <a
                  className="icon-link"
                  href="https://github.com/Gorgostammos"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="devicon-github-original"></i>
                </a>

                <a
                  className="icon-link cv-link"
                  href="/CV/CV_Gorgos_Tammo.pdf"
                  aria-label="CV"
                >
                  CV
                </a>
              </div>
            </div>

            {/* HØYRE SIDE - PROFILBILDE */}
            <div className="flex w-full min-w-0 justify-center lg:flex-[1] lg:justify-end">
              <img
                src="/profile.webp"
                alt="Profilbilde"
                className="block h-auto w-full max-w-80 rounded-card lg:rounded-[30px_15px]"
              />
            </div>
          </div>
        </section>

        {/* Om meg */}

        <section
          className="flex flex-col gap-8 my-24 max-w-4/5 mx-auto"
          id="om-meg"
        >
          <h1 className="text-4xl font-bold text-heading self-start">Om meg</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-8 lg:gap-10 bg-card rounded-card p-6 md:p-10 text-left">
            {/* VENSTRE SIDE: Presentasjon */}

            <div className="min-w-0">
              <p className="text-primary-text m-2 text-[1rem] leading-relaxed ">
                Hei! Jeg heter Gorgos, jeg har en bachelorgrad i
                informasjonssystemer, med spesialisering i Software Engineering
                og Business Intelligence. Jeg har stor interesse for
                programmering og liker å utvikle løsninger fra idé til ferdig
                produkt. Gjennom prosjekter som GYK har jeg fått praktisk
                erfaring med fullstack-utvikling, blant annet innen frontend,
                databaser og systemintegrasjoner.
              </p>
            </div>

            {/* STREKEN MELLOM KOLONNENE */}
            <div
              aria-hidden="true"
              className="animated-divider h-[2px] w-full lg:h-auto lg:w-[3px]"
            />

            {/* HØYRE SIDE: Hvordan jeg jobber */}
            <section className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-heading">
                Hvordan jeg jobber
              </h3>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-3xl text-accent-light"
                  aria-hidden="true"
                />

                <div>
                  <h4 className="font-semibold text-primary-text">
                    Løsningsorientert
                  </h4>

                  <p className="text-secondary-text">
                    Jeg liker å forstå utfordringer og finne løsninger som
                    fungerer i praksis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="text-3xl text-accent-light"
                  aria-hidden="true"
                />

                <div>
                  <h4 className="font-semibold text-primary-text">Samarbeid</h4>
                  <p className="text-secondary-text">
                    Jeg liker å samarbeide med andre, dele kunnskap og finne
                    gode løsninger sammen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FontAwesomeIcon
                  icon={faArrowTrendUp}
                  className="text-3xl text-accent-light"
                  aria-hidden="true"
                />

                <div>
                  <h4 className="font-semibold text-primary-text">
                    Kontinuerlig læring
                  </h4>
                  <p className="text-secondary-text">
                    Jeg holder meg oppdatert, utforsker nye teknologier og
                    utvikler meg hele tiden
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* UTDANNING */}
        <section
          className="w-full max-w-6xl mx-auto my-24 scroll-mt-25"
          id="utdanning"
        >
          <h2 className="text-4xl font-bold text-heading mb-8">Utdanning</h2>

          {/* Grid bestemmer hvordan kortene plasseres */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bachelorgrad */}
            <div className="flex flex-col gap-3 rounded-card bg-card border border-card-border shadow-card p-6 md:p-8 text-left">
              {/* Ikon og overskrift */}
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-2xl text-accent-light"
                />

                <h3 className="text-xl font-semibold text-primary-text">
                  Bachelorgrad i Informasjonssystemer
                </h3>
              </div>

              <p className="text-secondary-text">
                Software Engineering og Business Intelligence
              </p>

              <p className="text-accent-light">Høgskolen i Østfold</p>

              <p className="text-secondary-text text-sm mt-auto pt-4">
                2021 – 2024
              </p>
            </div>

            {/* Videregående */}
            <div className="flex flex-col gap-3 rounded-card bg-card border border-card-border shadow-card p-6 text-left">
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-2xl text-accent-light"
                />
                <h3 className="text-xl font-semibold text-primary-text">
                  Studiespesialisering
                </h3>
              </div>

              <p className="text-accent-light">Greåker VGS</p>

              <p className="text-secondary-text text-sm mt-auto pt-4">
                2018 – 2021
              </p>
            </div>
          </div>
        </section>

        {/* ERFARING */}
        <CareerTimeline />

        {/* FERDIGHETER */}

        <Ferferdighetkort />

        {/* PROSJEKTER */}
        <Projects />

       
      </main>

      <Footer/>

      {/* KONTAKT */}
     
    </div>
  );
}

export default App;
