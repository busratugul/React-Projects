import React from 'react'
import '../App.css'

function LockSlider({handleInput, sliderValue, width}) {
  let sliderStyle = {
    appearance: "none",
    width: !width ?"200px" :width,
    height:"50px",
    backgroundColor: "rgba(188, 190, 188, 0.5)",
    outline: "none",
    borderRadius: "45px"

  }
  return <input type="range" className="slider"style={sliderStyle} 
  value={sliderValue}
  onInput={handleInput}/>
}

export default LockSlider