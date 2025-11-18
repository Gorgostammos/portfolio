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
       <p id='omMeg'>Jeg er en mann på 22 år og har fullført bachelorgrad innen informasjonssystemer,
        med spesialisering i Software Engineering og Business Intelligence. 
        Jeg trivesgodt både i selvstendig prosjekter og i teammiljøer, og jeg er spesielt glad i programmering.</p>
       </div>
       <div className='Ferdighetter'>
       <h2>Ferdighetter</h2>
       <i class="fa-brands fa-java"></i>
       </div>

       <h2>Programering språk</h2>
      </div>
      
    </>
    
  )
}

export default App
