import React from 'react'

function Buttons({setCurrentElement}) {
    
    const buttons = [
        {
            text: "h1",
            element:"h1"
        },
        {
            text: "h2",
            element:"h2"
        },
        {
            text: "h3",
            element:"h3"
        },
        {
            text: "h6",
            element:"h6"
        },
        {
            text: "paragraph",
            element:"p"
        },
        {
            text: "bold",
            element:"b"
        },
        {
            text: "italic",
            element:"i"
        },
        {
            text: "space",
            element:"br"
        },
    ]
    
  return (
<>
      {
          buttons.map((button,key) => (
              <button key={key}>{button.text} </button>
            ))
        }
         <div className='buttons' onClick= {() => setCurrentElement(button.element)}>
    </div>
</>
   
  )
}

export default Buttons