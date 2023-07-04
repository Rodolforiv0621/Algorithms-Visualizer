import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lines, setLines] = useState([]);
  useEffect(()=>{
    resetArray();
  },[]);

  function resetArray(length){
    const arr = [];
    for(let i = 0;i<15;i++){
      arr.push(Math.floor(Math.random() * 100));
    }
    setLines(arr);
  }
  
  return (
    <>
      <header className="header">
        <a href="#" className='logo'>Link</a>
        <nav className="navbar">
          <a href="#" >Hello1</a>
          <a href="#">Hello2</a>
          <a href="#">Hello3</a>
          <a href="#">Hello4</a>
        </nav>
      </header>
      <div className="container">
        {(lines.length > 0) && lines.map((line) => <div className='line' >{line}</div>)}
      </div>
    </>
  );
}

export default App
