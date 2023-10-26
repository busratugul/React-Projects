import React from 'react'
import { NewTaskStyle  } from './TableStyle'
import { RiDeleteBin6Fill } from 'react-icons/ri'

function TaskList({text, date, onDelete , onTask}) {


  return (
   <NewTaskStyle onClick={onTask}>
    <div>
      <h3>{text}</h3>
      <small style={{color:"red"}}>{date}</small>
    </div>

    <div>
    <button className='delete' onClick={onDelete}>
      <i><RiDeleteBin6Fill/></i>
    </button>
    </div>
   </NewTaskStyle>
  )
}

export default TaskList
