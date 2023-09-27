import React, {useState} from 'react'

function RandomizeColor() {

    const [color, setColor] = useState("")

    const handleClick = (e) => {
        //console.log( getRandomColor())
        setColor(getRandomColor())
        let body = document.querySelector("body")

        body.style.backgroundColor = getRandomColor()
       
    }

function getRandomColor() {
    let letters = "0123456789ABCDEF"
    let color = "#"

    for( let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16 )]
    }

    return color
}

  return (
    <div className='container'>
        <h1 className='header'>{!color ?"Randomize Color" :color}</h1>
        <button className='btn btnOne' 
        onClick={handleClick}
        >Change Me</button>
    </div>
  )
}

export default RandomizeColor