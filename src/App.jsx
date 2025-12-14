// App.jsx
import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Protofolio</h1>

        <div className="omMeg">
          <h2 id="omMeg">Om meg</h2>
          <section className="profile">
            <div className="meg">
              <p id="jeg">Hei, Jeg er Gorgos Tammo jeg er en utvikler.</p>
              <p id="omMeg">
                Jeg er en mann på 22 år og har fullført bachelorgrad innen
                informasjonssystemer, med spesialisering i Software Engineering
                og Business Intelligence. Jeg trives godt både i selvstendige
                prosjekter og i teammiljøer, og jeg er spesielt glad i
                programmering.
              </p>

              <section className="divider">
                <p id="omMeg">for med info kan du lese mere her:</p>

                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/gorgos-tammo-8b2286230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <i className="devicon-linkedin-plain"></i>
                  </a>

                  <a
                    href="https://github.com/Gorgostammos"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="GitHub"
                    aria-label="GitHub"
                  >
                    <i className="devicon-github-original"></i>
                  </a>

                  <a href=".\src\assets\CV\CV Gorgos Tammo.pdf (4).pdf">CV</a>
                </div>
              </section>
            </div>
            <div className="bilde">
              <img src=".\src\assets\minbilde.jpeg" alt="Profilbilde" />
            </div>
          </section>
        </div>

        <div className="Utdanning">
          <h2 id="Utdanning">Utdanning</h2>

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

        <div className="Erfaring">
          <h2 id="Erfaring">Erfaring</h2>
          <section className="experience-card">
            <div className="experience-left">
              <h3>It support</h3>
              <p className="experience-workplace">Frontkom</p>
              <p className="experience-workplace">
                Jeg har jobbet tett med kunder for å løse både enkle og
                komplekse tekniske utfordringer. Jeg har blant annet oppdatert
                plugins og kode, rettet feil i funksjonen for tilbakestilling av
                passord, samt foreslått tiltak for å bedre tilgjengeligheten på
                nettsider. Dette har gitt meg solid erfaring med feilsøking,
                oppgraderinger og praktisk problemløsning.
              </p>
            </div>
            <div className="experience-right">
              <p className="experience-date">Juni 2025 - August 2025</p>
            </div>
          </section>

          <section className="experience-card">
            <div className="experience-left">
              <h3>Sommerjobb</h3>
              <p className="experience-workplace">Christensen bakeri</p>
              <p className="experience-workplace">
                Hjalp til med å lage og pynte bakverk, sorterte varer og vasket
                opp.
              </p>
            </div>
            <div className="experience-right">
              <p className="experience-date">
                juni 2022 - August. 2022 og Juni 2023 - Juli 2023
              </p>
            </div>
          </section>

          <section className="experience-card">
            <div className="experience-left">
              <h3>Vikar</h3>
              <p className="experience-workplace">Johannes pizza</p>
              <p className="experience-workplace">
                Tok imot bestillinger, håndterte kassen, kjørte bestillinger ved
                hjemlevering, bistod med matlaging og klargjorde før åpning.
              </p>
            </div>
            <div className="experience-right">
              <p className="experience-date">Februar. 2021 - April 2021</p>
            </div>
          </section>
        </div>

        <div className="Ferdigheter">
          <h2>Ferdigheter</h2>

          {/* PROGRAMMERINGSSPRÅK */}
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

          {/* WEB & RAMMEVERK */}
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
              <span className="skill-icon" data-label="NPM">
                <i className="devicon-npm-original-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Bash">
                <i className="devicon-bash-plain"></i>
              </span>
            </div>
          </div>

          {/* DATABASER */}
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
              <span className="skill-icon" data-label="NPM">
                <i className="devicon-npm-original-wordmark"></i>
              </span>
              <span className="skill-icon" data-label="Supabase">
                <i className="devicon-supabase-plain-wordmark"></i>
              </span>
            </div>
          </div>

          {/* VERKTØY & IDE-ER */}
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
              <span className="skill-icon" data-label="Supabase">
                <i className="devicon-vscode-plain-wordmark"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="Prosjekter">
          <h2 id="Prosjekter">Prosjekter</h2>

          <div className="projects-grid">
            <section className="project-card">
              <h3>Matte-ving</h3>
              <iframe
                src="https://matte-ving.vercel.app/"
                title="Matte-ving"
                className="project-iframe"
              />
              <p className="project-description">
                Dette er min nåværende portfolio nettside, bygget med React og
                CSS. Den viser min utdanning, erfaring, ferdigheter og
                prosjekter. Nettsiden er designet for å være responsiv og
                brukervennlig på både desktop og mobile enheter.
              </p>

              {/* NY: footer-rad som plasserer React-logoen til høyre */}
              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/Gorgostammos/matte-ving-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="GitHub"
                    aria-label="GitHub matte-ving-react"
                  >
                    <i className="devicon-github-original"></i>
                  </a>

                  <a
                    href="https://matte-ving.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="Matte-ving Nettside"
                    aria-label="matte-ving Nettside"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </section>

                <div className="project-tech">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-javascript-plain"></i>
                  <i className="devicon-python-plain"></i>
                </div>
              </section>
            </section>

            <section className="project-card">
              <h3>calendar App</h3>
              <iframe
                src="https://calender-app-mu.vercel.app/#/calendar"
                title="calendar"
                className="project-iframe"
              />
              <p className="project-description">
                Dette er min nåværende portfolio nettside, bygget med React og
                CSS. Den viser min utdanning, erfaring, ferdigheter og
                prosjekter. Nettsiden er designet for å være responsiv og
                brukervennlig på både desktop og mobile enheter.
              </p>

              {/* NY: footer-rad som plasserer React-logoen til høyre */}
              <section className="project-footer">
                <section className="project-links">
                  <a
                    href="https://github.com/Gorgostammos/Calender_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="GitHub"
                    aria-label="GitHub Calender_app"
                  >
                    <i className="devicon-github-original"></i>
                  </a>
                  <a
                    href="https://calender-app-mu.vercel.app/#/calendar"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="calendar Nettside"
                    aria-label="calendar Nettside"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                  </a>
                </section>
                <div className="project-tech">
                  <i className="devicon-react-original"></i>
                  <i className="devicon-javascript-plain"></i>
                </div>
              </section>
            </section>
          </div>

          <footer className="footer">
            <section className="contact-card">
              <h2 id="Contact">Kontakt</h2>
              <div className="contact-info">
                <p>
                  La oss ta en prat! Ta gjerne kontakt for samarbeid! Jeg er
                  alltid åpen for en prat.
                </p>
                <div className="telefon">
                  <a href="tel:467 25 849" type="tel" alt="Telefonnummer">
                    <FontAwesomeIcon icon={faPhone} />
                    46725849
                  </a>
                </div>
                <a
                  href="mailto:Gorgos2002@icloud.com"
                  type="email"
                  alt="E-post"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  Gorgos2002@icloud.com
                </a>
              </div>
            </section>
          </footer>
        </div>
      </div>
    </>
  );
}
export default App;
