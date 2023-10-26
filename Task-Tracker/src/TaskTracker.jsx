import React, { useState } from 'react'
import Title from './Title'
import { TableStyle } from './TableStyle'
import Tasks from './Tasks'
import TaskList from './TaskList'

function TaskTracker() {

const [newTask, setNewTask] = useState({
    date: "",
    text: "",
    completed:"",
})

const handleChangeDate = (e) => {
    setNewTask({
        ...newTask, 
        date: e.target.value
    })
}

const handleChangeText = (e) => {
    setNewTask({
        ...newTask,
        text: e.target.value
    })
}


const [taskList, setTaskList] = useState([])

const addNewTask = () => {
    setTaskList([
        ...taskList,{
            date: newTask.date,
            text: newTask.text
        }
    ])
    console.log("click");
}

const handleCompleted = (e) => {
    e.target.classList.toggle("completed")
}

const handleDelete = (e) => {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
}

  return (
    <>
      <Title text={'Task Tracker'}/>

      <TableStyle>

    <ul className="table-head">
        <li>Date</li>
        <li>Task</li>
    </ul>

         <Tasks 
         date={newTask.date}
         setDate={handleChangeDate}
         text={newTask.text}
         setText={handleChangeText}
         onClick={addNewTask}
         /> 

<ul className='table-row'>
    {taskList.map((task, index) => {
        if (task.date !== "" && task.text !== "") {
            return <TaskList
            key={index} 
            date={task.date} 
            text={task.text} 
            onTask={handleCompleted}
            onDelete={handleDelete}/>;
        } null;
    })}

</ul>
         </TableStyle>

            
        
    </>
  )
}

export default TaskTracker
