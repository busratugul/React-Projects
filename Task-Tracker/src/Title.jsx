import React from 'react'

function Title({classes, text}) {
  return (
    <h1 className={!classes ?"title" :classes}>
        {!text ?"Name" :text}
    </h1>
  ) 
}

export default Title