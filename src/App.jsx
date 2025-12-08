import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Protofolio</h1>

        <div className="omMeg">
          <h2 id="omMeg">Om meg</h2>
          <p id="omMeg">
            Jeg er en mann på 22 år og har fullført bachelorgrad innen
            informasjonssystemer, med spesialisering i Software Engineering og
            Business Intelligence. Jeg trives godt både i selvstendige
            prosjekter og i teammiljøer, og jeg er spesielt glad i
            programmering.
          </p>
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
      </div>
    </>
  );
}

export default App;
