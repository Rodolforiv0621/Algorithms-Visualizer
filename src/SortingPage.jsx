import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react'
import {bubbleSort} from './bubbleSort'

function SortingPage(){
    const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  let idx = 0;
  useEffect(() => {
    resetArray()
  }, []);
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
            lines.map((line, idx) => (
              <div
                key={idx}
                id={idx++}
                className="line"
                style={{
                  height: `${line * 1.3 + 30}px`,
                  padding: `0px ${getWidth()}px`,
                }}
              ></div>
            ))}

          <button className="bubble" onClick={bubble}>
            Bubble Sort
          </button>
        </div>
      </>
    );
  

  function resetArray(length) {
    const arr = [];
    let i
    for (i = 0; i < 40; i++) {
      arr.push(Math.floor(Math.random() * (350-5) + 5));
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
  function deletes(){
    let length = lines.length-1;
    setLines(lines.filter(line => line !== lines[length]))
    
  }
    function bubble(){
      bubbleSort(lines)
    }
}

export default SortingPage