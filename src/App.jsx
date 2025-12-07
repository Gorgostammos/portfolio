import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Protofolio</h1>

        <div className='omMeg'>
          <h2 id='omMeg'>Om meg</h2>
          <p id='omMeg'>
            Jeg er en mann på 22 år og har fullført bachelorgrad innen informasjonssystemer,
            med spesialisering i Software Engineering og Business Intelligence. 
            Jeg trives godt både i selvstendige prosjekter og i teammiljøer, 
            og jeg er spesielt glad i programmering.
          </p>
        </div>

        <div className='Ferdigheter'>
          <h2>Ferdigheter</h2>

          {/* PROGRAMMERINGSSPRÅK */}
          <div className="skill-group">
            <h3>Programmeringsspråk</h3>
            <div className="icons">
              <i className="devicon-java-plain-wordmark"></i>
              <i className="devicon-python-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-csharp-line-wordmark"></i>
              <i className="devicon-kotlin-plain-wordmark"></i>
            </div>
          </div>

          {/* WEB & RAMMEVERK */}
          <div className="skill-group">
            <h3>Web & Rammeverk</h3>
            <div className="icons">
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-dotnetcore-plain"></i>
              <i className="devicon-npm-original-wordmark"></i>
              <i className="devicon-bash-plain"></i>
            </div>
          </div>

          {/* DATABASER */}
          <div className="skill-group">
            <h3>Databaser</h3>
            <div className="icons">
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-mysql-plain-wordmark"></i>
              <i className="devicon-firebase-plain-wordmark"></i>
              <i className="devicon-neo4j-plain-wordmark"></i>
              <i className="devicon-supabase-plain-wordmark"></i>
            </div>
          </div>

          {/* VERKTØY & IDE-ER */}
          <div className="skill-group">
            <h3>Verktøy & IDE-er</h3>
            <div className="icons">
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-github-original-wordmark"></i>
              <i className="devicon-androidstudio-plain-wordmark"></i>
              <i className="devicon-pycharm-plain-wordmark"></i>
              <i className="devicon-intellij-plain-wordmark"></i>
              <i className="devicon-visualstudio-line"></i>
              <i className="devicon-vscode-plain-wordmark"></i>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
