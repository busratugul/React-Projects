import React, {useState} from 'react'
import '../App.css'
import LockSlider from './LockSlider'
import {AiFillUnlock} from 'react-icons/ai'

function SlideToUnlock() {

  const [showLockSlider, setShowLockSlider] = useState(false)

  return (
    <div className='container' style={{
      height:"70vh",
      margin:"15vh 25vh",
      width:340,
      border:"4px solid #000",
      borderRadius:"15px"
    }}>

      <h1 className='title'>Title</h1>
      {showLockSlider 
      ?(<LockSlider width={"250px"}/> )
      :(<AiFillUnlock className='unlockIcon'/>)}
      
    </div>
  )
}

export default SlideToUnlock