import { useState, useEffect } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'
import {Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'


function App(){
  const [count, setCount] = useState(0)
  // const location = useLocation()
  // const navigate = useNavigate()
  const [url, setUrl] = useState('/');

  useEffect(
    () => {
      const changeURL = () => {
        setUrl(window.location.pathname);
      }
      window.addEventListener("popState", changeURL)

      console.log("The URL is ", url)

      return () => {
        window.removeEventListener("popstate", changeURL)
      }
    }, []

  )
 
  return (
    <>
    <nav>
    <Link to = "/">Home</Link><br/>
    <Link to = "/ecom">Ecom</Link><br/>
    <Link to = "/feature">Feature</Link><br/>
    <Link to = "/resume">Resume</Link>
    </nav>

    <Routes>
      <Route path = "/"element={<Home/>}/>
      <Route path = "/ecom"element={<Ecom/>}/>
      <Route path = "/feature"element={<Feature/>}/>
      <Route path = "/resume"element={<Resume/>}/>
    </Routes>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App