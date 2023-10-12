import React from 'react'

function Contact({ contact , width= 300, cardColor="bg-success", textColor="text-danger"}) {
  return (
    <div 
    className={"card bg-light m-auto pb-3"} 
    style={{width: width}}
    >
        <div className= {`card-header ${cardColor} ${textColor}`}>
           <span className='fw-bold'>{contact.first_name}</span> 
        </div>
        <div className="card-body text-left">
           <span className='fw-bold'> 
            Lastname: </span> 
            {contact.last_name}</div>
        <h4 className="card-text"></h4>
        <p className="card-text">
            <span className="fw-bold">
            Email: </span>
            {contact.email}
        </p>
        <p className="card-text">
            <span className="fw-bold">
            Phone: </span>
            {contact.phone}
        </p>
        <p className="card-text">
            <span className="fw-bold">
            User name: </span>
            {contact.user_name}
        </p>
    </div>
  )
}

export default Contact