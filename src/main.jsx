import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SortingPage from './SortingPage.jsx'
import PathfindingPage from './PathfindingPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/sorting" element={<SortingPage/>}/>
      <Route path="/pathfinding" element={<PathfindingPage/>}/>
    </Routes>
  </BrowserRouter>
  
  
)
