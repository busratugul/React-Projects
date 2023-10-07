import React, {useState} from 'react'

function SliderComp() {
    
const [circle, setCircle] = useState(0)

const handleChange = (e) => {
setCircle(e.target.value)
}
    
let BgColor
let textColor
if( circle < 25) {
    BgColor = "yellow"
    textColor = "red"
}else if ( circle < 25 && circle <= 50) {
    BgColor = "red"
    textColor = "blue"
}else if( circle < 51 && circle <= 75) {
    BgColor = "blue"
    textColor = "orange"
}else if( circle < 76 && circle <= 100) {
    BgColor = "orange"
    textColor = "green"
}

const sliderStyle = {
    appearance: "none",
    width: "80%",
    height: "45px",
    background: !BgColor ?"gray" :BgColor,
    transition: "all 2s ease",
    cursor: "pointer",
    opacity: 0.7,
    borderRadius: "14px"
}

  return (
    <div className='container' style={{gap: 100}}>
        <input 
        type="range" 
        min="0" max={100} 
        value={circle} 
        onChange={handleChange}
        style= {sliderStyle}/>
        
        <div style={{
            color: !textColor ?"white" :textColor,
            height: `${circle * 3}px`,
            width: `${circle * 3}px`,
            background: !BgColor ?"black" :BgColor,
            fontWeight: 600, 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%"
        }}>
            <span className='circle'>{circle}</span>
        </div>
    </div>
  )
}

export default SliderComp