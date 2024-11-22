import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/anime1">Anime 1</Link></li>
            <li><Link to="/anime2">Anime 2</Link></li>
            <li><Link to="/anime3">Anime 3</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/anime1" element={<Anime1 />} />
          <Route path="/anime2" element={<Anime2 />} />
          <Route path="/anime3" element={<Anime3 />} />
        </Routes>
      </main>
    </>
  )
}

function Inicio() {
  return <h1>Inicio</h1>
}

function Anime1() {
  return <h1>Anime 1</h1>
}

function Anime2() {
  return <h1>Anime 2</h1>
}

function Anime3() {
  return <h1>Anime 3</h1>
}

export default App