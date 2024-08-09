import React,{useState} from 'react'

export default function Form() {
  const [text,setText]=useState("")
  const [mystyle,setmyStyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const [btn,setValue]=useState("Dark Mode")
  const toupcase=()=>{
    setText(text.toUpperCase())
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
  const togglecolor=()=>{
    if (mystyle.color==="white")
    {
        setmyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setValue("Dark Mode")
    }
    else
    {
        setmyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setValue("Light Mode")
    }
  }
  return (
    <div>
        <div className="mb-3" style={mystyle}>
          <h1>Enter the Text to Analyze</h1>
          <textarea className="form-control" value={text} onChange={typeing} id="my-box" aria-describedby="emailHelp" rows={8}/>
          <button className="btn btn-primary mx-3 my-3" onClick={toupcase}>Change to Uppercase Letters</button>
          <button className="btn btn-primary" onClick={tolowcase}>Change to Lower Letters</button>
          <button className="btn btn-primary mx-3 my-3" onClick={cleartext}>Clear</button>
          <button className="btn btn-primary mx-3" onClick={togglecolor}>{btn}</button>
          <h2 className="my-3">Your Text Summery</h2>
          <p className="my-3">{text.split(" ").length} Words,{text.length} Characters</p>
          <h2 className="my-3">Preview</h2>
          <textarea className="form-control" readOnly rows={8} value={text}></textarea>
        </div>
    </div>
  )
}
