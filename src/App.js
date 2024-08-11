// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './my-components/Form';
import NavBar from './my-components/NavBar';


function App() {
  const [mode,setMode]=useState("white")
  const change_mode=()=>{
    if(mode==="white")
    {
      setMode("dark");
      document.body.style.backgroundColor="rgb(21, 23, 30)"
    }
    else
    {
      setMode("white")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <div className="App">
      <div>
        <NavBar mode={mode} changemode={change_mode}/>
        <div className="container my-3">
            <Form mode={mode}/>
        </div>
      </div>
    </div>
  );
}

export default App;
