import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Buttons from './Buttons';

function Popup({ variant, onClick }) {
   
    
    const popupContainer = {
        position: "absolute",
        top: 0,
        height: "100vh",
        width:"100vw",
        background: "rgba(0,0,0,0.1)",
        zIndex: "-1"
    }

    const popupStyle = {
        position: "relative",
        margin:"40vh 9vw",
        zIndex: "1",
        display: "flex",
    }

    const handleClick = (e) => {
        console.log(e.target)
    }

  return (
    <div style={popupContainer}>
        <div style={popupStyle}>
            <Alert variant={`${variant}`}>
                <h4 className='mt-2'>Popup Title</h4>
            </Alert> 
            <Buttons handleClick ={onClick}/>  
        </div>
    </div>
  )
}

export default Popup