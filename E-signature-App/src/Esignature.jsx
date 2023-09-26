import React, { useState} from 'react'
import './Style.css'
import Title from './components/Title'

function Esignature() {

const [name, setName] = useState("")
const [date, setDate] = useState("")
const [text, setText] = useState("")
const [submitted, setSubmitted] = useState(false)

const handleName = (e) => {
    setName(e.target.value)
}

const handleDate = (e) => {
    setDate(e.target.value)
}

const handleText = (e) => {
    setText(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()

    if(!name || !date || !text) {
        alert("Please complete all fields")
        return
    }

    setSubmitted(true)

    setTimeout(() => {
        setName("")
        setDate("")
        setText("")

    setSubmitted(false)
    }, 3000);
}


const inputStyle = {
    width : "5rem",
    height: "3rem",
    border: "1px solid #333",
    margin: "3rem 1rem 2rem",
    padding: "1rem",
    backgroundColor: "#fff",
    color: "gray"
}

  return (
    <>
    <div className='container text-center'>

        <h1 className='header'>E-Signature</h1>

        <div className='card'>
        <Title classes={"title"} text={name}/>
        <Title classes={"subtitle"} text= {!date ?"Date" :date }/>
        <p className='text'>{!text ?"Could you tell us about yourself?" :text}</p>
        
        </div>

    <div className='input'>
    
    <input type="text" value={name} style= {inputStyle} placeholder= {"Name"} onChange={handleName}  />
    <input type="date" value={date} style= {inputStyle} onChange= {handleDate}/>

    <input type="text" value={text} style= {inputStyle} onChange= {handleText} placeholder="Text" className='input-text' />


    </div>

    <button type='submit' className='submitBtn' onClick={handleSubmit}> Submit </button>
    </div>

    </>
  )
}

export default Esignature
