import './App.css'
import Buttons from './Buttons'
import Text from './Text'
import { useState } from 'react'

function App() {
  
  const texts = [
    'Devs Just Want To Have Fun By Cyndi Lauper',
    "I come home in the morning light My mother says,'When you gonna live your life right?'' Oh mother dear we're not the fortunate ones And devs wanna have fun Oh devs just wany to have fun",
    'The phone rings in the middle of the night My father yells, "What you gonna do with your life?" Oh daddy dear you know you still number one But girlsdevs, they wanna have fun Oh devs just want to have',
    "That's all they really want Some fun when the working day is done Oh devs, they wanna have fun Oh devs wanna have fun Oh devs just wanna have fun (devs, they wanna,wanna have fun, devs wanna have)"
  ]

  const [selectedText, setSelectedText] = useState("")

  const handleMouseUp= () => {
    setSelectedText(window.getSelection().toString())
    console.log(selectedText)
   
}

const [currentElement, setCurrentElement] = useState("p")

texts.forEach((currText) => {
  currText.includes(selectedText)
})

return (

  <div onMouseUp={handleMouseUp} className='App'>
    <h1 className='main-title'>Hi I'am TipTap</h1>
      <Buttons setCurrentElement= {setCurrentElement}/>
      <div className='editör-container' >
     {
      texts.map((text) => (
        <Text currentElement= {currentElement}  text= {text}/>
      ))
     }
</div>
  </div>
  )
}

export default App
