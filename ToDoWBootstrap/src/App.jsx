import React, {useState} from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Stack } from "@mui/material"
import { CreateTask } from "./CreateTask"
import { Task } from "./Task"


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = 
  (newTask) => {
    setTasks((prevTask) => {
    return [...prevTask,newTask]
  })}
  console.log(tasks);

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      return prevTask.filter((taskItem, index)=> {
        return index !== id
      })
  })}

  return (
    <Stack fontFamily={"roboto"}>
    <Header/>
    <CreateTask onAdd={addTask}/>

    <div className="row">
      {tasks.map((taskItem,idx) => {
      return(
      <Task
      key={idx} 
      id={idx}
      title={taskItem.title}
      content={taskItem.content}
      onClick={deleteTask}/>)})}
    </div>
    
        <Footer/>
    </Stack>
  )
}

export default App
