import { createContext } from "react";
import { useState } from 'react'
import axios from 'axios'

const TaskContext = createContext()

function Provider({children}){
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

const sharedValuesAndMethods = {
    tasks, 
    createTask, 
    fetchTask, 
    editTaskById, 
    deleteTaskById
  }

    return (
        <TaskContext.Provider value={sharedValuesAndMethods}>
            {children}
        </TaskContext.Provider>
    )
}
export {Provider}
export default TaskContext