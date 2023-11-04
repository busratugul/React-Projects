import React from 'react'

export const Planet = ({ planet }) => {
 const planetStyle = {
    width: 400,
    animation: "rotate 10s linear infinite",
    position: "absolute",
    bottom: 0,
    zIndex: 0,
    background: "transparent"
  }
  return <img src={planet} alt="Planet" style={planetStyle}/>
}
