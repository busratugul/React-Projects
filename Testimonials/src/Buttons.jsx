import React,{useState} from 'react'

function Buttons({text,icon,handleClick}) {
const [active, setActive] = useState(false)

const activeClick = () => {
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })
    setActive(!active)
    handleClick()
}

  return (
    <div>
        <button className=
        {`btn ${text} ${active ?"active" :""} `}
        onClick={activeClick}>
        {icon}
        {text ?text :"click"}
        </button>
    </div>
  )
}

export default Buttons