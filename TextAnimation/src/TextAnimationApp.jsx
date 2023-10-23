import React, { useState, useRef, useEffect } from 'react'
import Buttons from './Buttons'
import FormGroup from './FormGroup'
import AnimatedText from "react-animated-text-content"

function TextAnimationApp() {
    const [inputValue, setInputValue] = useState("")
    const handleInputChange= (e) => {
        setInputValue(e.target.value)
    }
    const [animatedText, setAnimatedText] = useState("")

    const handleClear = () => {
        setAnimatedText(inputValue)
        setInputValue("")
    }

    let inputText = useRef(null)

    useEffect(() => {
      inputText.current.focus()
    })
    
  return (
    <div className="container mt-5 text-center w-100">
      <form
        className="container d-flex align-items-center justify-content-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormGroup 
        labelText={"In your text to be animated"} inputType="text" 
        placeholder={"Your text..."} 
        values={inputValue}
        onChange={handleInputChange}
        reference={inputText}
        />

        <Buttons 
        text={'Clear'} 
        BtnClass={'btn-lg btn-danger mt-1'}
        HandleClick= {handleClear} />

      </form>

     {  animatedText && 
     (<AnimatedText 
     type="char" 
    // type="text" 
     interval={0.04}
     duration={1.1}
     animation={{
        x: "-10px",
        y: "-250px",
        ease: "linear"
     }}
     className='title m-5 pe-5'>
    {animatedText}
      </AnimatedText>)}
    
    </div>
  )
}

export default TextAnimationApp
