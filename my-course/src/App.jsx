import './App.css'
import { useEffect,useState } from "react"
import axios from 'axios'
import Courses from './courses'


function App() {
const [courses, setCourses] = useState([])

const fetchCourses = async () => {
  const response= await axios.get('http://localhost:3000/courses')
  setCourses(response.data)
  debugger

  
  
}

useEffect(() => {
 fetchCourses()
},[])

  return (
   <div className="App">
    <Courses courses= {courses}/>
   </div>
  )
}

export default App
