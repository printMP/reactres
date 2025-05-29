import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import Ecom from './pages/Ecom/Ecom'
import Feature from './pages/Feature/Feature'
import Resume from './pages/Resume/Resume'
import {useEffect, useState} from 'react';



export default function App() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>(location.pathname);

  

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);


  


  return (
    <div>

      <nav style={{ padding: '1em', background: '#eee'}}>
        <Link to="/" style={{ marginRight: 'irem'}}>Home </Link>
        <Link to="/Ecom" style={{ marginRight: 'irem' }}>Ecom </Link>
        <Link to="/Feature" style={{ marginRight: 'lrem' }}>Feature </Link>
        <Link to="/Resume" style={{ marginRight: 'irem'}}>Resume</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/Ecom" element={< Ecom />} />
        <Route path="/Feature" element={< Feature />} />
        <Route path="/Resume" element={< Resume/>} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>

  )
}
