import { useState,useContext } from "react"
import TaskContext from "../src/context/task"


function TaskCreate({task,taskFormUpdate,onUpdate}) {

const { editTaskById, createTask } = useContext(TaskContext)

const [title, setTitle] = useState(task ?task.title :"")
const [taskDesc, setTaskDesc] = useState(task ?task.taskDesc :"")

const HandleChange = (e) => {
    setTitle(e.target.value)
}

const handleTaskChange = (e) => {
    setTaskDesc(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(taskFormUpdate){
        onUpdate(task.id,title,taskDesc)
        //editTaskById(task.id,title,taskDesc)
    }else {
        //onCreate(title,taskDesc)
        createTask(title,taskDesc)
    }
    setTitle("")
    setTaskDesc("")
}

  return (
    <div> { taskFormUpdate 
        ? <div className="task-update">
            <form className="task-form">
                <h3 className="title-edit">Lütfen Taskı Düzenleyiniz!</h3>
                <label className="task-label">Başlık</label>
                <input value={title} 
                onChange={HandleChange} 
                type="text" className="input-task"/>
                <label className="task-label">Task Giriniz!</label>
                <textarea value={taskDesc} 
                onChange={handleTaskChange}  className="input-task" rows={5}></textarea>
                <button onClick={handleSubmit} className="editBtn">  Düzenle</button>
               
            </form>
        </div> 
        : <div className="task-create">
            <h3 className="title">Lütfen Task Ekleyiniz...</h3>
            <form className="task-form">
    
                <label className="task-label">Başlık</label>
                <input value={title} 
                onChange={HandleChange} 
                type="text" className="input-task"/>
                <label className="task-label">Task Giriniz!</label>
                <textarea value={taskDesc} 
                onChange={handleTaskChange}  className="input-task" rows={5}></textarea>
                <button onClick={handleSubmit} className="button">Oluştur</button>
               
            </form>
        </div>
    } </div>
  )
}

export default TaskCreate