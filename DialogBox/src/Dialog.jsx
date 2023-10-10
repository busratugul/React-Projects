import React, {useState} from 'react'
import Buttons from './Buttons'


function Dialog({ width= "350px" }) {

    const [first, setfirst] = useState(second)


  return (
<div className='card bg-light m-auto mt-5' style={{width: width, height: "200px"}}> 
    <div className="card-body">
        <div className="d-grid" style={{gridTemplateColumns: "2fr 1fr", 
          alignItems: "center",  
          alignSelf: "center",
          justifyContent: "center" }}>
        <section>
            <h2 className='card-title'>title</h2>
            <h3 className='card-text'>text</h3>
        </section>
        <div>icon</div>
        </div>
    </div>
    <hr />
    <div className='d-flex mb-2 px-1 text-end m-auto'>
        <Buttons BtnClass={"btn-secondary"} text= {"Cancel"} HandleClick = {console.log("e")} />
        <Buttons BtnClass={"btn-success"} text= {"Subscribe"} HandleClick = {console.log("e")} />
        <Buttons BtnClass={"btn-danger"} text= {"Unsubscribe"} HandleClick = {console.log("e")} />
    </div>
</div>
  )
}

export default Dialog