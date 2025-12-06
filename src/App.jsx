import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
          <div id='Mine' className="icons">
            
          <i class="devicon-java-plain-wordmark colored"></i>
          
            <i class="devicon-python-plain-wordmark colored"></i>
          
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            
            <i class="devicon-react-original-wordmark colored"></i>
          
            <i className="devicon-kotlin-plain-wordmark"></i>   {/* Kotlin ikonet */}
          </div>
        </div>

        <h2>Programmeringsspråk</h2>
      </div>
    </>
  )
}

export default App
