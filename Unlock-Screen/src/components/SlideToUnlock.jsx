import React, {useState, useEffect} from 'react'
import '../App.css'
import LockSlider from './LockSlider'
import {AiFillUnlock} from 'react-icons/ai'
import unlockBg from '../images/unlock.jpg'
import HomeBg from '../images/screen.jpg'

function SlideToUnlock() {
  const [uiProps, setUiProps] = useState({
    uiText:"Unlock Screen",
    uiColor:"#eee",
    uiBg:`url(${unlockBg}) center/cover no-repeat`
  })

  const [showLockSlider, setShowLockSlider] = useState(true)
  const [lockSliderValue, setLockSliderValue] = useState(0)

  const handleLockSliderInput = (e) => {
    setLockSliderValue(e.target.value)
    //console.log(e.target.value);
  }

  const lockScreen = () => {
    setLockSliderValue(0)
    setShowLockSlider(true)
    setUiProps({
      uiText:"Unlock Screen",
      uiColor:"#eee",
      uiBg:`url(${unlockBg}) center/cover no-repeat`
      })
  }

  useEffect(() => {
   document.body.style.background= "#999"
   if(lockSliderValue === "100"){
    setLockSliderValue(0)
    setShowLockSlider(false)
    setUiProps({
      uiText:"Home Screen",
      uiColor:"#222",
      uiBg:`url(${HomeBg}) center/cover no-repeat`
    })
   }
  },[lockSliderValue])
  

  return (
    <div className='container' style={{
      height:"70vh",
      margin:"15vh 25vh",
      width:340,
      border:"4px solid #000",
      borderRadius:"15px",
      background: uiProps.uiBg
    }}>

      <h1 className='title' 
      style={{color: uiProps.uiColor}}>
        {uiProps.uiText}
       </h1>
      {showLockSlider 
      ?(<LockSlider 
        width={"200px"} handleInput={handleLockSliderInput} value={lockSliderValue}/>)
      :(<AiFillUnlock className='unlockIcon' onClick={lockScreen}/>)}
      
    </div>
  )
}

export default SlideToUnlock