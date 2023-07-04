import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();
  
  return (
    <>
      <header className="header">
        <a className="logo" onClick={() => navigate("")}>
          Algorithms Visualizer
        </a>
        <nav className="navbar">
          <a onClick={() => navigate("/sorting")}>Sorting Algorithms</a>
          <a onClick={() => navigate("/pathfinding")}>Pathfinding Algorithms</a>
          {/* <a href="#">Hello3</a> */}
        </nav>
      </header>
    </>
  );
}

export default App
