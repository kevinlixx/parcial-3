import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import portada from './imgs/portada.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Anime1 from './components/Anime1.jsx';
import Anime2 from './components/Anime2.jsx';
import Anime3 from './components/Anime3.jsx';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/inicio">Inicio</Link></li>
            <li><Link to="/anime1">Anime 1</Link></li>
            <li><Link to="/anime2">Anime 2</Link></li>
            <li><Link to="/anime3">Anime 3</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/anime1" element={<Anime1 />} />
          <Route path="/anime2" element={<Anime2 />} />
          <Route path="/anime3" element={<Anime3 />} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center' }}>
        <p>© 2024, Creados por: Kevin Lis, Juan Montaño, David Yazo </p>
      </footer>
    </>
  )
}

function Inicio() {
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Biblioteca Anime</h1>
      <img src={portada} alt="portada" style={{ width: '50%', height: 'auto', aspectRatio: '12/9' }} />
    </div>
  );
}



export default App
