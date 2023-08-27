import { useState } from "react"
import TaskCreate from "./taskCreate"

function TaskShow({ task, onDelete, onUpdate }) {

  const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
      onDelete(task.id)
    }

    const handleEditClick = () => {
      setShowEdit(!showEdit)
    }

    const handleSubmit = (id,UpdatedTitle,updatedDesc) => {
      setShowEdit(false)
      onUpdate(id,UpdatedTitle,updatedDesc)
    }

  return (
  <div className="task">

      {
        showEdit ? <TaskCreate task= { task } taskFormUpdate={ true } onUpdate={handleSubmit}/> 
        
      :
      <div>
      <h3 className="s-title">Göreviniz</h3>
      <p>{task.title}</p>
      <h3 className="s-title">Yapılacaklar</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button onClick={handleDeleteClick} className="clearBtn">Sil</button>
        <button onClick={handleEditClick} className="updateBtn">Güncelle</button>
      </div>
    </div>
      }

  </div>
  )
}

export default TaskShow