import React,{useState} from 'react'

export default function Form(props) {
  const [text,setText]=useState("")
  const toupcase=()=>{
    setText(text.toUpperCase())
    props.setMessage("Changed to Uppercase","success")
  }
  const tolowcase=()=>{
    setText(text.toLowerCase())
  }
  const typeing=(e)=>{
    setText(e.target.value)
  }
  const cleartext=()=>{
    setText("")
  }
  return (
    <div>
        <div className={`mb-3 text-${props.mode==="dark"?"light":"dark"}`}>
          <h1>Enter the Text to Analyze</h1>
          <textarea autoFocus className={`form-control bg-${props.mode==="dark"?"white":"dark"} text-${props.mode==="white"?"white":"dark"}`} value={text} onChange={typeing} id="my-box" aria-describedby="emailHelp" rows={8}/>
          <button className={`btn btn-${props.mode==="white"?"dark":"white"} bg-${props.mode==="dark"?"light":"dark"} mx-3 my-3`} onClick={toupcase}>Change to Uppercase Letters</button>
          <button className={`btn btn-${props.mode==="white"?"dark":"white"} bg-${props.mode==="dark"?"light":"dark"}`} onClick={tolowcase}>Change to Lower Letters</button>
          <button className={`btn btn-${props.mode==="white"?"dark":"white"} bg-${props.mode==="dark"?"light":"dark"} mx-3 my-3`} onClick={cleartext}>Clear</button>
          <h2 className="my-3">Your Text Summery</h2>
          <p className="my-3">{text.length>0?text.split(" ").length:0} Words,{text.length} Characters</p>
          <h2 className="my-3">Preview</h2>
          <textarea className={`form-control bg-${props.mode==="dark"?"white":"dark"} text-${props.mode==="white"?"white":"dark"}`} readOnly rows={8} value={text}></textarea>
        </div>
    </div>
  )
}
