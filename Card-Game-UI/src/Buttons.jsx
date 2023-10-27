import React from 'react'

function Buttons({onClick, text, Btnclass}) {
  return (
    <div>
        <button onClick={onClick} className= {Btnclass}> {text} </button>
    </div>
  )
}
export default Buttons