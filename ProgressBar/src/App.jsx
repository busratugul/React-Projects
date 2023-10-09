import React, { useRef, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ProgressBar} from './ProgressBar'

function App() {
  const [completed, setCompleted] = useState(0)
  const [status, setStatus] = useState({
    ui: 28,
    ux: 33,
    data: 20
  })

  const projectData = [
    {bgColor: "#7633f9", completed : status.ui},
    {bgColor: "#28a745", completed : status.ux},
    {bgColor: "#dc3545", completed : status.data}
  ]

  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
    margin: 5,
  }

  const uiInput = useRef(null)
  useEffect(() => {
    uiInput.current.focus()
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) +1) ,2000)
  },[])

  return (
   <div className="container container-sm mx-auto mt-5 text-center">
    <h2>Progress Bar</h2>
    <h6>Project Status:</h6>

    <ul className='mt-4 list-unstyled'>
      <li>
        UI Status: 
        <input 
        type="number" 
        style={inputStyle} 
        ref={uiInput}
        value={status.ui} 
        onChange={(e) => setStatus({...status, ui: e.target.value})}/>
      </li>
      <li>
        UX Status: 
        <input 
        type="number" 
        style={inputStyle} 
        ref={uiInput}
        value={status.ux} 
        onChange={(e) => setStatus({...status, ux: e.target.value})}/>
      </li>
      <li>
        DATA Status: 
        <input 
        type="number" 
        style={inputStyle} 
        ref={uiInput}
        value={status.data} 
        onChange={(e) => setStatus({...status, data: e.target.value})}/>
      </li>
    </ul>
    {/*ProgressBar*/}
    {
      projectData.map((data,idx) => (
        <ProgressBar 
        key={idx}
        bgColor={data.bgColor}
        completed={data.completed}/>
      ))
    }
    <ProgressBar 
        completed= {completed}
        bgColor ={completed > 50 ?"#7633f9" :"#dc3545"}/>

   </div>
  )
}

export default App
