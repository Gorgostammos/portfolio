// src/App.jsx
import "./App.css";
import PillNav from "./components/PillNav/PillNav";
import CareerTimeline from "./components/CareerTimeline/CareerTimeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faEnvelope,
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
    <>
      <div>
        <PillNav items={navItems} />

        {/* OM MEG */}
        <div className="omMeg" id="om-meg">
          <h2>Om meg</h2>
          <section className="profile">
            <div className="meg">
              <p id="jeg">Hei, jeg er Gorgos Tammo og jeg er en utvikler.</p>
              <p>
                Jeg er en mann på {age(2002)} år og har fullført bachelorgrad
                innen informasjonssystemer, med spesialisering i Software
                Engineering og Business Intelligence. Jeg trives godt både i
                selvstendige prosjekter og i teammiljøer, og jeg er spesielt
                glad i programmering.
              </p>
              <section className="divider">
                <p>For mere info kan du lese mere her:</p>
                <div className="social-icons">
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
            <div className="bilde">
              <img src="/profile.webp" alt="Profilbilde" />
            </div>
          </section>
        </div>

        {/* UTDANNING */}
        <div className="Utdanning" id="utdanning">
          <h2>Utdanning</h2>

          <section className="education-card">
            <div className="education-left">
              <h3>
                Bachelorgrad i Informasjonssystemer – Software Engineering og
                Business Intelligence
              </h3>
              <p className="education-school">Høgskolen i Østfold</p>
            </div>
            <div className="education-right">
              <p className="education-date">August 2021 – Juni 2024</p>
            </div>
          </section>

          <section className="education-card">
            <div className="education-left">
              <h3>Studiespesialisering</h3>
              <p className="education-school">Greåker VGS</p>
            </div>
            <div className="education-right">
              <p className="education-date">August 2018 – Juni 2021</p>
            </div>
          </section>
        </div>

        {/* ERFARING */}
        <CareerTimeline />
    

        {/* FERDIGHETER */}
        <div className="Ferdigheter" id="ferdigheter">
          <h2>Ferdigheter</h2>

          <div className="skill-group">
            <h3>Programmeringsspråk</h3>
            <div className="icons">
              <span className="skill-icon" data-label="Java">
                <i className="devicon-java-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Python">
                <i className="devicon-python-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="JavaScript">
                <i className="devicon-javascript-plain"></i>
              </span>
              <span className="skill-icon" data-label="C#">
                <i className="devicon-csharp-line-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Kotlin">
                <i className="devicon-kotlin-plain-wordmark"></i>
              </span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Web & Rammeverk</h3>
            <div className="icons">
              <span className="skill-icon" data-label="Html">
                <i className="devicon-html5-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Css">
                <i className="devicon-css3-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="React">
                <i className="devicon-react-original-wordmark"></i>
              </span>
              <span className="skill-icon" data-label=".NET">
                <i className="devicon-dot-net-plain-wordmark"></i>
              </span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Databaser</h3>
            <div className="icons">
              <span className="skill-icon" data-label="MongoDB">
                <i className="devicon-mongodb-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="MySQL">
                <i className="devicon-mysql-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Firebase">
                <i className="devicon-firebase-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Neo4j">
                <i className="devicon-neo4j-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Supabase">
                <i className="devicon-supabase-plain-wordmark"></i>
              </span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Verktøy & IDE-er</h3>
            <div className="icons">
              <span className="skill-icon" data-label="Git">
                <i className="devicon-git-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="GitHub">
                <i className="devicon-github-original-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Android Studio">
                <i className="devicon-androidstudio-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="PyCharm">
                <i className="devicon-pycharm-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="IntelliJ IDEA">
                <i className="devicon-intellij-plain-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="VS Code">
                <i className="devicon-vscode-plain-wordmark"></i>
              </span>
            </div>
          </div>
        </div>

        {/* PROSJEKTER */}
        <div className="Prosjekter" id="prosjekter">
          <h2>Prosjekter</h2>

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
        </div>

        {/* KONTAKT */}
        <footer className="footer" id="kontakt">
          <section className="contact-card">
            <h2>Kontakt</h2>
            <div className="contact-info">
              <p>
                La oss ta en prat! Ta gjerne kontakt for samarbeid! Jeg er
                alltid åpen for en prat.
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
    </>
  );
}

export default App;
