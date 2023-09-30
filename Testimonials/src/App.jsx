import React, {useState, useEffect} from 'react'
import './App.css'
import Buttons from './Buttons'
import {FaComments} from 'react-icons/fa'
import {HiUsers} from 'react-icons/hi'
import  {HiDocumentSearch} from 'react-icons/hi'

function App() {
  const [testimonials, setTestimonials] = useState("")
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
    
  },[testimonials])

  console.log(items)
  


   
  return (
   <div className='App'>
    <h1 className='title'>
      Testimonials
    </h1>
    <div className='buttons'>
    <Buttons
    text = "Users"
    icon = {<HiUsers/>}
    handleClick={() => setTestimonials("Users")} 
    />
    <Buttons
    text = "Posts"
    icon = {<HiDocumentSearch/>}
    handleClick={() => setTestimonials("Posts")}
    />
    <Buttons
    text = "Comments"
    icon = {<FaComments/>}
    handleClick={() => setTestimonials("Comments")}
    />
    </div>

    <h4 className='subtitle'>{testimonials ?testimonials :"Select Form Above!"}</h4>

    {
      !items ?null  
      :items.map((item) => {
      return <div className="card" key={item.id}>
        {item.name && 
        <h5 className='card-header'>{item.name}</h5>}

        <div>{<h4>{item.title}</h4>}</div>

        <small>{item.body}</small>

        </div> 
    })}


   </div>
  )
}

export default App
