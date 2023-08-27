import TaskCreate from '../components/taskCreate'
import TaskList from '../components/taskList'
import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  const createTask = (title,taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
    }]

    setTasks(createdTasks)
}

const deleteTaskById = (id) => {
  const afterDeletingTasks = tasks.filter((task) => {
    return task.id !== id
  })
  setTasks(afterDeletingTasks)
}

const editTaskById = (id,UpdatedTitle,updatedDesc) => {
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
