import TaskCreate from '../components/taskCreate'
import TaskList from '../components/taskList'
import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = async (title,taskDesc) => {
  const response = await axios.post('http://localhost:3000/tasks', {
      title,
      taskDesc
    })

    const createdTasks = [
      ...tasks, 
      response.data
    ]

  /*   const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
    }] */

    setTasks(createdTasks)
}

const fetchTask = async () => {
  const response = await axios.get('http://localhost:3000/tasks')
  setTasks(response.data)
}

useEffect(() => {
  fetchTask()
},[])
  

const deleteTaskById = async (id) => {
  await axios.delete(`http://localhost:3000/tasks/${id}`)
  const afterDeletingTasks = tasks.filter((task) => {
    return task.id !== id
  })
  setTasks(afterDeletingTasks)
}

const editTaskById = async (id,UpdatedTitle,updatedDesc) => {
  await axios.put(`http://localhost:3000/tasks/${id}`,{
    title: UpdatedTitle,
    taskDesc: updatedDesc
  })
  const updatedTasks = tasks.map((task) => {
    if(task.id === id){
      return {id,
        title: UpdatedTitle,
        taskDesc: updatedDesc
      }
    }else {
      return task
    }
})
  setTasks(updatedTasks)
}

  return (
    <div className='App'>
      <TaskCreate onCreate={ createTask }/>
      <h1>Görevler</h1>
      <TaskList tasks= {tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  )
}

export default App
