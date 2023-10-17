import React, { useState } from 'react'
import NewNote from './NewNote'
import Buttons from './Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid'
import { MdCardMembership } from 'react-icons/md';


function NotesApp() {

    const [notes, setNotes] = useState([])

const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote]
    newNotes.filter((note) => !note.id && (note.id = uuidv4()))
    setNotes(newNotes)
    /* console.log(uuidv4()) */
}

const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !==id))
}

const cards = [
    "text-bg-info",
    "text-bg-danger",
    "text-bg-primary",
    "text-bg-success",
    "text-bg-warning",
]

const randomizeBg = () => {
    const random = Math.floor(Math.random() * cards.length)
    return cards[random]
}

  return (
    <div className='container'>
        <Buttons BtnClass={"btn-info"} text={"+ New Note"} HandleClick={addNewNote} />

        <div 
        className="container container-sm d-flex"
        style={{gap:25, flexWrap:"wrap"}}>
        
        {notes.map((note) => <NewNote key={note.id} note={note} onClick= {deleteNote} cardBg= {randomizeBg}/>)}
        {/* {notes.map((note) => console.log(note.id))} */}
            
        </div>
        
    </div>
  )
}

export default NotesApp