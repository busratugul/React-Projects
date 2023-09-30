import './App.css'
import React,{ useState } from 'react'
import Text from './Text'

function App() {
  
  const texts = [
    'Devs Just Want To Have Fun By Cyndi Lauper',
    "I come home in the morning light My mother says,'When you gonna live your life right?'' Oh mother dear we're not the fortunate ones And devs wanna have fun Oh devs just wany to have fun",
    'The phone rings in the middle of the night My father yells, "What you gonna do with your life?" Oh daddy dear you know you still number one But girlsdevs, they wanna have fun Oh devs just want to have',
    "That's all they really want Some fun when the working day is done Oh devs, they wanna have fun Oh devs wanna have fun Oh devs just wanna have fun (devs, they wanna,wanna have fun, devs wanna have)"
  ]

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

  const [selectedText, setSelectedText] = useState("")
  const [selectedElement, setSelectedElement] = useState(null)

  const handleMouse = () => {
    const text = window.getSelection().toString()
    setSelectedText(text)
    
  }
 

  const handleClick = (e) => {
    const element = e.target.innerText
    const newElement = React.createElement(element,null, selectedText)
     


    setSelectedElement(newElement)
}


return (

  <div className='App'>
    <h1 className='main-title'>Hi I'am TipTap</h1>    {
      buttons.map((button,key) => (
      <button onClick={handleClick} key={key}>{button.text}</button>
      ))
    }
      <div className='editör-container' onMouseUp={handleMouse} >
      {
      texts.map((text, key) => (
        <Text text= {text} key={key}/>
      ))
      }
</div>
  </div>
  )
}

export default App
