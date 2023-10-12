import React, {useRef, useEffect, useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './Title';
import ContactsData from './Data.json'
import Contact from './Contact.jsx';

function App() {
  let inputSearch = useRef(null)

  useEffect(() => {
    inputSearch.current.focus()
  })

  const [searchContent, setSearchContent] = useState("")
  

  return (
   <div className="text-center mt-3">
    <Title text= {"Filter Contacts App"}/>
    <input 
    type="text" 
    placeholder='Search by first name' 
    className='m-4 inputSearch' 
    style={{padding: "0.3rem 0.5rem"}}
    ref={inputSearch}
    onChange={(e) => setSearchContent(e.target.value)} />

    <section 
    className='d-flex flex-wrap' 
    style={{gap:15, maxWidth:1600,  margin:"auto"}}>

      {ContactsData.filter((contact) => {
        if(searchContent === ""){
          return contact
        }else if(contact.first_name.toLocaleLowerCase()
        .includes(searchContent.toLocaleLowerCase()))
        {
          return contact
        }
      }).map((data,key) => <Contact key={data.id} contact= {data}/>)}
     </section>
   </div>
  )
}

export default App
