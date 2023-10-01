import React from 'react'


function Buttons({text, onClick, className }) {

  return (
    <div>
      <button className={`btn ${className}`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Buttons