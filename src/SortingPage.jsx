import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { Component } from 'react'

function SortingPage(){
    const navigate = useNavigate();
  const [lines, setLines] = useState([]);
  let widths = 5;
  let idx = 0;
  useEffect(() => {
    resetArray();
    console.log(lines);
  }, []);

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
    console.log(lines[0].key)
    setLines(lines.filter(line => line !== lines[length]))
    
    
    
  }
function swap(){
  let length = lines.length - 1;
      if(document.getElementById(length).offsetHeight > document.getElementById(length-1).offsetHeight){
       document.getElementById(length).style.backgroundColor = 'green';
       document.getElementById(length-1).style.backgroundColor = "blue";
      
      
    }else{
      document.getElementById(length).style.backgroundColor = "blue";
      document.getElementById(length - 1).style.backgroundColor = "green";
    }
    if (lines[length] > lines[length-1] ) {
      let height = document.getElementById(length).offsetHeight;
      let height2 = document.getElementById(length-1).offsetHeight;
      document.getElementById(length).style.height = height2 + "px";
      document.getElementById(length - 1).style.height = height + "px";
      console.log(lines);
      let temp = lines[length];
      lines[length] = lines[length-1];
      lines[length-1] = temp;
      console.log(lines)
    } else {
      // let height = document.getElementById(length-1).offsetHeight;
      // let height2 = document.getElementById(length).offsetHeight;
      // document.getElementById(length - 1).style.height = height2 + "px";
      // document.getElementById(length ).style.height = height + "px";
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
          <button className="delete" onClick={deletes}>
            Delete item
          </button>
          <button className="delete" onClick={swap}>
            Swap last 2 items
          </button>
        </div>
      </>
    );
  
}

export default SortingPage