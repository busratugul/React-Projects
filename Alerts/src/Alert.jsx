import React, { useEffect,  useState }from 'react'
import Buttons from "./Buttons"

export default function Alert({type, message, delay= false, delayTime= 3000 }) {
  
  const [showAlert, setShowAlert] = useState(true)

  const closeAlert = (e) => {
   e.target.parentElement.parentElement.parentElement.classList.add("fadeAlert")

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
showAlert && <div className={`alert alert-${type} shadow`}>

<div className="alert-close">
  <span className='mr-1'>{message}</span> 
  <Buttons onClick={closeAlert}/>
  </div>
</div>

)}