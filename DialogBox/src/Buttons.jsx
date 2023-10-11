import React from 'react'




function Buttons({BtnClass, HandleClick, text }) {
  return (
    <div>
      <button className= {`btn ${BtnClass}`} onClick={HandleClick}>{text ?text :"Click"} </button>
     
    </div>
  )
}

export default Buttons