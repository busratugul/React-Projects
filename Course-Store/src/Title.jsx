import React from 'react'

function Title({ classes, text, subtitle }) {
  return (
    <>
      <h1 className={!classes ? 'title p-3 text-center' : classes}>
        {!text ? null : text}
      </h1>
      <h4 className="fw-400"> {subtitle} </h4>
    </>
  )
}

export default Title
