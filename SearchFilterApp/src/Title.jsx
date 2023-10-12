import React from 'react'

function Title({text}) {
  return (
    <div>
        <h2 className=''>{text ?text :"Title"}</h2>
    </div>
  )
}

export default Title