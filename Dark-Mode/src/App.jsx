import React from "react"
import './App.css'
import { useState } from "react"

function App() {
  const [text, setText] = useState("Light")
  const [dark, setDark] = useState(false)


  const handleClick = () => {
   if(dark == true){
    setDark(false)
    setText("Light")
   }else {
    setDark(true)
    setText("Dark")
   }
}

  return (
    <div className={`App ${text}`}>
      <h2 className="title">
        {`My Blog With ${text} Theme`}
      </h2>
      <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem nobis repellat, voluptatum enim molestias eos nostrum dolores aliquid possimus, incidunt commodi praesentium necessitatibus! Mollitia voluptas eius eveniet sequi eligendi.</p>

      <button className="btn" onClick={handleClick} > 
      {dark ?"Light" :"Dark"}
      </button>

    </div>
  )
}

export default App
