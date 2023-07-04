import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react'

function SortingPage(){
    const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  let widths = 5;
  useEffect(() => {
    resetArray();
  }, []);

  function resetArray(length) {
    const arr = [];
    let i
    for (i = 0; i < 40; i++) {
      arr.push(Math.floor(Math.random() * (400-10) + 10));
    }
    
    setLines(arr);
  }
  function getWidth(){
    let x = lines.length;
    if(x<10){
        return 30;
    }else if(x<30){
        return 20;
    }else if(x<40){
        return 10;
    }else if(x<60){
        return 5;
    }else{
        return 3;
    }
    
  }
    return (
      <>
        <header className="header">
          <a className="logo" onClick={() => navigate("/")}>
            Algorithms Visualizer
          </a>
          <nav className="navbar">
            <a onClick={() => navigate("/sorting")}>Sorting Algorithms</a>
            <a onClick={() => navigate("/pathfinding")}>
              Pathfinding Algorithms
            </a>
          </nav>
        </header>
        <div className="container">
          {lines.length > 0 &&
            lines.map((line) => <div className="line" style={{height: `${line + 25}px`, padding: `0px ${getWidth()}px`}}></div>)}
        </div>
      </>
    );
  
}

export default SortingPage