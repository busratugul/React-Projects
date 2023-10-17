import React, { useState, useEffect } from 'react'
import { NoteStyle, Icons, DeleteIcon, EditIcon } from './NoteStyle'
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md'


function NewNote({ note,onClick, text, cardBg}) {

    const [newCardBg, setNewCardBg] = useState()
    useEffect(() => {
      !newCardBg && setNewCardBg(cardBg)
    }, [newCardBg])
    
  return (
    <NoteStyle className="card shadow">
        <div className={`card-header text-right ${newCardBg}`}>
            <Icons>
                <EditIcon>
                    <MdOutlineNoteAlt/>
                </EditIcon>
                
                <DeleteIcon>
                    <MdDeleteForever onClick={()=>onClick(note.id)}/>
                </DeleteIcon>
            </Icons>
            
        </div>
        <div className="card-body">
            <textarea 
            style={{border: "none", outline: "none" }}>
                {text}
            </textarea>
        </div>
    </NoteStyle>
  )
}

export default NewNote