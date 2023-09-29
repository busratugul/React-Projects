import React from 'react'


function Text({text, currentElement}) {
const textArray = text.split(" ")
console.log("SPLIT" ,textArray);
  
  
return  React.createElement(`${currentElement}`, null, `${text}`)
}

export default Text