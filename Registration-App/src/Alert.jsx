import React, {useState,useEffect} from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Alert({message,delay= false, delayTime= 3000}) {
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
    showAlert && <div className="alert alert-success alert-dismissible d-flex" role="alert">
    {message ?message :"Alert"} 
    <AiOutlineClose onClick={closeAlert}/>
    </div>
  )
}

export default Alert