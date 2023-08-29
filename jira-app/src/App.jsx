import TaskCreate from '../components/taskCreate'
import TaskList from '../components/taskList'
import './App.css'
import { useEffect,useContext } from 'react'
import TaskContext from './context/task'

function App() {

const {fetchTask} = useContext(TaskContext)
useEffect(() => {
  fetchTask()
},[])
  

  return (
    <div className='App'>
      <TaskCreate/>
      <h1>Görevler</h1>
      <TaskList/>
    </div>
  )
}

export default App
