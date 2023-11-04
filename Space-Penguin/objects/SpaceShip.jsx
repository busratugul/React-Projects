import React from 'react'

export const SpaceShip = ({ changeShip, scale, start }) => {
  let animation = start
  return (
    <>
    <img 
    src={changeShip} 
    alt="Space Ship"
    style={{position:"absolute", bottom:50, zIndex:1, width:scale, background: "transparent"}}
    className={animation}/>
    </>
  )
}
