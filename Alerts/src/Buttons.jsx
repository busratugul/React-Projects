import React from 'react'

function Buttons({onClick}) {
  return (
    <div>
        <button onClick={onClick} className='btn btn-close'></button>
    </div>
  )
}
export default Buttons