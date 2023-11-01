import { Button } from '@mui/material'
import React, { useState,useRef,useEffect } from 'react'

export const CreateTask = ({ ...props }) => {
const inputRef = useRef(null)
useEffect(() => {
inputRef.current.focus()
},[])


const [task, setTask] = useState({
    title:"",
    content:""
})

const detectChange = (e) => {
const {name, value} = e.target;
setTask((prevTask) => {
   return{
    ...prevTask, [name]:value,
   }
})
}

const submitTask = (e) => {
  props.onAdd(task)
  setTask({
    title:"",
    content:""
  })
  e.preventDefault()
  inputRef.current.focus()
}
  return (
    <div>
        <form action="#" className='w-50 p-3 my-4 mx-auto border border-secondary-subtle rounded-1 text-center shadow' >

            <input type="text" className='form-control border border-0 border-bottom text-body-secondary' name="title" 
            value={task.title}placeholder='Başlık'
            onChange={detectChange}
            ref={inputRef} />

            <textarea name='content' 
            rows="3"
            placeholder='Taskınızı giriniz.' className='form-control mt-2 border border-0 border-bottom text-body-secondary'
            value={task.content}
            onChange={detectChange}/>

            <Button color="primary" variant='text' size='small' 
            sx={{marginTop: 2}}
            onClick={submitTask}
            >EKLE</Button>
        </form>
    </div>
  )
}

