import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Protofolio</h1>
       <div className='omMeg'>
       <h2 id='omMeg'>Om meg</h2>
       <p id='omMeg'>Jeg er en mann på 22 år og har fullført bachelorgrad innen informasjonssystemer,
        med spesialisering i Software Engineering og Business Intelligence. 
        Jeg trivesgodt både i selvstendig prosjekter og i teammiljøer, og jeg er spesielt glad i programmering.</p>
       </div>
       <div className='Ferdighetter'>
       <h2>Ferdighetter</h2>
       <div id='Mine'>
       <FontAwesomeIcon icon={faJava} />
       <FontAwesomeIcon icon={faPython} />
       <FontAwesomeIcon icon={faHtml5} />
       <FontAwesomeIcon icon={faCss} />
       <FontAwesomeIcon icon={faReact} />
       </div>
       </div>

       <h2>Programering språk</h2>
      </div>
      
    </>
    
  )
}

export default App
