import React, { useState, useEffect } from 'react'
import Buttons from './Buttons'
//OBJ
import { SpaceShip } from '../objects/SpaceShip'
import { Planet } from '../objects/Planet'
import { Moon } from '../objects/Moon'
//IMG
import Ship from '../image/space-ship-rocket-svgrepo-com.svg'
import Earth from '../image/planet-earth-svgrepo-com.svg'
import MoonImg from '../image/moon-svgrepo-com.svg'
import Penguin from '../image/penguin-svgrepo-com.svg'

export const SpacePenguinGame = () => {
  /* const [shipAction, setshipAction] = useState()
const [transformScale, setTransformScale] = useState(200) */

  const [shipProps, setShipProps] = useState({
    action: '',
    scale: 200,
  })

  const startShip = () => {
    /* setshipAction("fly")
  setTransformScale(50) */
    setShipProps({ action: 'fly', scale: 50 })
  }
  const landShip = () => {
    /* setshipAction("land")
  setTransformScale(200) */
    setShipProps({ action: 'land', scale: 200 })
  }
  const [shipType, setShipType] = useState(Ship)
  useEffect(() => {
    if(shipProps.action === "land"){
      setShipType(Penguin)
      setTimeout(() => {
        setShipType(Ship)
      },5500);
    } else if(shipProps.action === "fly"){
      setShipType(Ship)}
  }, [shipProps.action])
  

  return (
    <div className="space">
      <Buttons
        text={'Launch'}
        BtnClass={'btn-danger'}
        HandleClick={startShip}
      />

      <section className="env">
        <SpaceShip
          changeShip={shipType}
          scale={shipProps.scale}
          start={shipProps.action}
        />

        <Planet planet={Earth} />

        <Moon Moon={MoonImg} />
      </section>

      <Buttons
        text={'Land'}
        BtnClass={'btn-info'}
        scale={shipProps.scale}
        HandleClick={landShip}
      />
    </div>
  )
}
