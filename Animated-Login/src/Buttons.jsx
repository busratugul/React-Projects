import React from 'react'

function Buttons({ onClick, btnClass, text }) {
  return (
    <div>
      <button className={`btn ${btnClass}`} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}
export default Buttons
