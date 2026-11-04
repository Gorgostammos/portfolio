// src/App.jsx
import "./App.css";
import PillNav from "./components/PillNav/PillNav";
import CareerTimeline from "./components/CareerTimeline/CareerTimeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faCode,
  faUserGroup,
  faArrowTrendUp,

} from "@fortawesome/free-solid-svg-icons";
import { age } from "./utils/age";

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

      <main className="site-main flex-1 w-full min-w-0 px-4 text-center md:px-8 lg:px-12 ">
        {/*intro*/}
        <section
          className="flex w-full max-w-full mx-auto flex-col mt-2 mb-16 md:mb-24 scroll-mt-25"
          id="intro"
        >
          <section className="flex flex-col m-10 lg:flex-row max-w-full self-center items-center justify-center gap-8 lg:gap-10 w-full">
            <div className="flex flex-col w-full min-w-0 lg:flex-1 gap-10  justify-start rounded-[40px] px-10 py-6 text-left max-[768px]:px-6 max-[768px]:py-5">
              <h1 className="jeg font-bold text-heading m-0 md:text-[1rem] lg:text-[7rem]">
                Gorgos Tammo
              </h1>

              <section className="divider flex flex-col gap-10 text-primary-text w-1/2">
                <p>
                  Jeg er fullstack-utvikler med fokus på moderne webteknologier.
                  jeg har utviklet flere nettsteder og applikasjoner, og har
                  erfaring med både frontend og backend utvikling. Jeg er
                  opptatt av å skape brukervennlige og effektive løsninger, og
                  jeg trives med å jobbe i team for å levere kvalitetsprodukter.
                </p>

                <div className="social-icons flex flex-wrap gap-10 self-start">
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
              </section>
            </div>
            <div className="bilde max-w-3/10 ">
              <img
                src="/profile.webp"
                alt="Profilbilde"
                className="block h-auto w-full max-w-100 lg:max-w-96 rounded-card lg:rounded-[30px_15px]"
              />
            </div>
          </section>
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
          className="flex flex-col gap-14 my-24 mx-auto max-w-275"
          id="utdanning"
        >
          <h1 className="text-4xl font-bold text-heading">Utdanning</h1>

          <section className="education-card flex flex-col w-full min-w-0 lg:flex-1gap-2 shadow-card justify-start border border-card-border bg-card rounded-[40px] px-10 py-6 text-left shadow-[0_0_20px_5px_rgba(240,237,237,0.3)]max-[768px]:px-6max-[768px]:py-5">
            <div className="education-left m-0 mb-14 text-2xl font-weight-bold text-primary-text">
              <h3>
                Bachelorgrad i Informasjonssystemer – Software Engineering og
                Business Intelligence
              </h3>
              <p className="education-school">Høgskolen i Østfold</p>
            </div>
            <div className="education-right ml-8 whitespace-nowrap">
              <p className="education-date m-0 text-secondary-text">
                August 2021 – Juni 2024
              </p>
            </div>
          </section>

          <section className="education-card flex flex-col w-full min-w-0 lg:flex-1gap-2 shadow-card justify-start border border-card-border bg-card rounded-[40px] px-10 py-6 text-left shadow-[0_0_20px_5px_rgba(240,237,237,0.3)]max-[768px]:px-6max-[768px]:py-5">
            <div className="education-left education-left m-0 mb-14 text-2xl font-weight-bold text-primary-text">
              <h3>Studiespesialisering</h3>
              <p className="education-school m-0 text-2xl ">Greåker VGS</p>
            </div>
            <div className="education-right ml-8 whitespace-nowrap">
              <p className="education-date m-0 text-secondary-text">
                August 2018 – Juni 2021
              </p>
            </div>
          </section>
        </section>

        {/* ERFARING */}
        <CareerTimeline />

        {/* FERDIGHETER */}
        <section
          className="flex flex-wrap flex-col justify-center my-24 mx-auto gap-20"
          id="ferdigheter"
        >
          <h1 className="text-4xl font-bold text-heading">Ferdigheter</h1>
          <div className="skill-group">
            <h3>Programmeringsspråk</h3>
            <div className="icons">
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Java"
              >
                <i className="devicon-java-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Python"
              >
                <i className="devicon-python-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="JavaScript"
              >
                <i className="devicon-javascript-plain flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="C#"
              >
                <i className="devicon-csharp-line-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Kotlin"
              >
                <i className="devicon-kotlin-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Web & Rammeverk</h3>
            <div className="icons">
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Html"
              >
                <i className="devicon-html5-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Css"
              >
                <i className="devicon-css3-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="React"
              >
                <i className="devicon-react-original-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label=".NET"
              >
                <i className="devicon-dot-net-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Databaser</h3>
            <div className="icons">
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="MongoDB"
              >
                <i className="devicon-mongodb-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="MySQL"
              >
                <i className="devicon-mysql-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Firebase"
              >
                <i className="devicon-firebase-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Neo4j"
              >
                <i className="devicon-neo4j-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                className="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Supabase"
              >
                <i className="devicon-supabase-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
            </div>
          </div>
          <div className="skill-group">
            <h3>Verktøy & IDE-er</h3>
            <div className="icons">
              <span
                class="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Git"
              >
                <i className="devicon-git-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                class="inline-flex relative mb-4"
                id="skill-icon"
                data-label="GitHub"
              >
                <i className="devicon-github-original-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                class="inline-flex relative mb-4"
                id="skill-icon"
                data-label="Android Studio"
              >
                <i className="devicon-androidstudio-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                class="inline-flex relative mb-4"
                id="skill-icon"
                data-label="PyCharm"
              >
                <i className="devicon-pycharm-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                class="inline-flex relative mb-4"
                id="skill-icon"
                data-label="IntelliJ IDEA"
              >
                <i className="devicon-intellij-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
              <span
                class="inline-flex relative mb-4"
                id="skill-icon"
                data-label="VS Code"
              >
                <i className="devicon-vscode-plain-wordmark flex items-center justify-center content-center w-25 h-18 rounded-icon bg-iconBg hover:cursor-pointer hover:text-hover-Icon hover:text-6xl"></i>
              </span>
            </div>
          </div>
        </section>

        {/* PROSJEKTER */}
        <section className="Prosjekter" id="prosjekter">
          <h1 class="text-4xl font-bold text-heading">Prosjekter</h1>

          <div className="projects-grid">
            <section className="project-card">
              <h3>Pra</h3>
              <a
                href="https://www.promotionra.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-preview-link"
              >
                <img
                  src="PRA.png"
                  alt="Preview av PRA"
                  className="project-preview-image"
                />
              </a>
              <p className="project-description">
                Dette er den nye nettsiden til Promotion RA, som jeg utviklet i
                React. Jeg hadde ansvar for struktur, design, innhold og
                publisering. Nettsiden presenterer artister og arrangementer på
                en oversiktlig måte, med egne undersider for hver artist og et
                responsivt design tilpasset ulike enheter.
              </p>

              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/Promotionra/Pra"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub PRA"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                  <a
                    href="https://www.promotionra.no/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="PRA Nettside"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </section>
                <div className="project-tech">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                </div>
              </section>
            </section>

            <section className="project-card">
              <h3>Matte ving</h3>
              <a
                href="https://matte-ving.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-preview-link"
              >
                <img
                  src="matte-ving-preview.png"
                  alt="Preview av Matte-ving"
                  className="project-preview-image"
                />
              </a>
              <p className="project-description">
                Dette er en matte læringsplattform kalt "Matte-ving" som jeg har
                utviklet ved hjelp av React for frontend og Python for backend.
                Plattformen tilbyr interaktive matteoppgaver og ressurser for
                elever på ulike nivåer.
              </p>

              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/Gorgostammos/matte-ving-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub matte-ving-react"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                  <a
                    href="https://matte-ving.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="matte-ving Nettside"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </section>
                <div className="project-tech">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                  <i className="devicon-python-plain"></i>
                </div>
              </section>
            </section>

            <section className="project-card">
              <h3>Calender App</h3>
              <a
                href="https://calender-app-mu.vercel.app/#/calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="project-preview-link"
              >
                <img
                  src="calender.png"
                  alt="Preview av calendar app"
                  className="project-preview-image"
                />
              </a>
              <p className="project-description">
                Dette er en kalenderapplikasjon bygget med React og CSS. Den lar
                brukere legge til, redigere og slette hendelser på en
                brukervennlig måte. Applikasjonen er designet for å være
                responsiv og enkel å bruke på både desktop og mobile enheter.
              </p>

              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/Gorgostammos/Calender_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Calender_app"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                  <a
                    href="https://calender-app-mu.vercel.app/#/calendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="calendar Nettside"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </section>
                <div className="project-tech">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                  <i className="devicon-javascript-plain"></i>
                </div>
              </section>
            </section>

            <section className="project-card">
              <h3>Webutviklings eksamen</h3>
              <a
                href="https://calender-app-mu.vercel.app/#/calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="project-preview-link"
              >
                <img
                  src="webeksamen.png"
                  alt="Preview av webutviklings eksamen"
                  className="project-preview-image"
                />
              </a>
              <p className="project-description">
                Dette var min eksamensoppgave i webutvikling, hvor jeg utviklet
                en nettside ved hjelp av HTML og CSS. Nettsiden presenterer
                informasjon om et valgt tema på en strukturert og visuelt
                tiltalende måte, og er designet for å være brukervennlig og
                responsiv på ulike enheter.
              </p>

              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/Gorgostammos/nettsiden"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub nettsiden"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                  <a
                    href="https://nettsiden.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Nettsiden"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </section>
                <div className="project-tech">
                  <i className="devicon-html5-plain-wordmark"></i>
                  <i className="devicon-css3-plain-wordmark"></i>
                </div>
              </section>
            </section>

            <section className="project-card">
              <h3>Soclub</h3>
              <a
                href="https://github.com/MohammedGhazwanAlmilhim/soclub"
                target="_blank"
                rel="noopener noreferrer"
                className="project-preview-link"
              >
                <img
                  src="soclub.png"
                  alt="Preview av soclub"
                  className="project-preview-image"
                />
              </a>
              <p className="project-description">
                Dette en Android applikasjon kalt "Socclub" som detter var et
                eksamen prosjekt, der teamet og jeg utviklet ved hjelp av
                Kotlin. Appen er designet for å hjelpe brukere med å finne og
                bli med i sosiale klubber og aktiviteter i deres område.
              </p>

              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/MohammedGhazwanAlmilhim/soclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub socclub"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                </section>

                <div className="project-tech">
                  <i className="devicon-kotlin-plain"></i>
                  <i className="devicon-csharp-plain"></i>
                </div>
              </section>
            </section>
          </div>
        </section>
      </main>

      {/* KONTAKT */}
      <footer className="footer" id="kontakt">
        <section className="contact-card">
          <h1>Kontakt</h1>
          <div className="contact-info">
            <p>
              La oss ta en prat! Ta gjerne kontakt for samarbeid! Jeg er alltid
              åpen for en prat.
            </p>

            <div className="telefon">
              <a href="tel:46725849" aria-label="Telefonnummer">
                <FontAwesomeIcon icon={faPhone} />
                46725849
              </a>
            </div>

            <a href="mailto:Gorgos2002@icloud.com" aria-label="E-post">
              <FontAwesomeIcon icon={faEnvelope} />
              Gorgos2002@icloud.com
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
