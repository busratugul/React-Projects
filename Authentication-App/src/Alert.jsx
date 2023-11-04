import React, {useState,useEffect} from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Alert({
  message,
  delay= false,
  delayTime= 3000,
  alertClass}) {

    const [showAlert, setShowAlert] = useState(true)

    const closeAlert = (e) => {
     e.target.parentElement.classList.add("fade")
  
     setTimeout(() => {
      setShowAlert(false)
     }, 500);
  }
  
  useEffect(() => {
    delay &&
    setTimeout(() => {
        setShowAlert(false)
    },delayTime)
  })
  
  return (
    showAlert && <div 
    className={`alert ${alertClass} alert-dismissible d-flex shadow mt-2`}
    style={{justifyContent: 'space-between', cursor:"pointer"}} 
    role="alert">
    {message ?message :"Alert"} 
    <AiOutlineClose 
    onClick={closeAlert}
    style={{marginTop: 3, marginRight:-30}}/>
    </div>
  )
}

export default Alert