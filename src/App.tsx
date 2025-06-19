import { useState, useEffect } from 'react' 
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'
import {Route, Routes} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from "./Components/Header/Header"


function App(){
  // const location = useLocation()
  // const navigate = useNavigate()
  const [url, setUrl] = useState("/");

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
    <Header/>

    <Routes>
      <Route path = "/"element={<Home/>}/>
      <Route path = "/ecom"element={<Ecom/>}/>
      <Route path = "/feature"element={<Feature/>}/>
      <Route path = "/resume"element={<Resume/>}/>
      <Route path = "/Footer"element={<Footer/>}/>
    </Routes>
    
     
    </>
  )
}

export default App