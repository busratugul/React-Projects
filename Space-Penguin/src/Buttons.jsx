import React from 'react'

function Buttons({ BtnClass, HandleClick, text, icon }) {
  return (
    <div>
      <button 
      className={`btn ${BtnClass}`} 
      onClick={HandleClick}>
        {text ? text : 'Click'}
        {icon ? icon : null}
      </button>
    </div>
  )
}

export default Buttons
