import { ChangeEvent, FC, useState } from 'react'
import './App.css'
import { TodoType } from './AppTypes'
import ToDoItem  from './ToDoItem'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<TodoType[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setWorkDay(Number(event.target.value))
    }
  }

  const addNewTask = ():void => {
    const newTask = { taskname: task, workDay }
    setTodoList([...todoList, newTask])
    setTask('')
    setWorkDay(0)
  }

  const deleteTask = (nameToDelete:string):void => {
    setTodoList(todoList.filter((task) => {
      return task.taskname !== nameToDelete
    }))
  }

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          placeholder="Taskınızı giriniz.."
          name="task"
          onChange={handleChange}
        />

        <input
          type="number"
          value={workDay}
          placeholder="Kaç günde tamamlamalısınız.."
          name="workDay"
          onChange={handleChange}
        />

        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div>
        {todoList.map((task:TodoType,idx:number) => {
          return <ToDoItem key={idx} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default App
