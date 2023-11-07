import React from 'react'

function Title({ classes, text, subtitle, style }) {
  return (
    <>
      <h1 className={!classes ? 'title p-3 text-center' : classes} style={style}>
        {!text ? null : text}
      </h1>
      <h4 className="fw-400"> {subtitle} </h4>
    </>
  )
}

export default Title
