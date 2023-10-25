import { TodoType } from "./AppTypes"

type PropsType= {
    task: TodoType;
    deleteTask(nameToDelete:string):void
}


function ToDoItem({ task, deleteTask }:PropsType) {
  return (
    <div> 
        <div>
            <p>{task.taskname}</p>
            <p>{task.workDay}</p>
            <button onClick={() => deleteTask(task.taskname)}>Sil</button>
        </div>
     </div>
  )
}

export default ToDoItem