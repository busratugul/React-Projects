import './App.css'
import { useEffect,useState } from "react"
import axios from 'axios'
import Courses from './courses'
import Loading from './Loading'


function App() {

const [courses, setCourses] = useState([])
const [loading, setLoading] = useState(true)

const buyNewCourse = (id) => {
  const newCourses = courses.filter((course) => {
    return course.id !== id
  })
  setCourses(newCourses)
}

const fetchCourses = async () => {
  setLoading(true)
  try{
    const response= await axios.get('http://localhost:3000/courses')
    setCourses(response.data)
    setLoading(false)
  }catch(error){
    setLoading(false)
  } 
}

useEffect(() => {
 fetchCourses()
},[])

  return (
  <div className="App">
    {loading ?(
      <Loading/>
    ):(
    <>
      {courses.length === 0 ? (<div className='refresh'>
        <h2>Kursların Hepsini Satın Aldın 😁</h2>
        <button onClick={() => {fetchCourses()}}  className="refreshBtn">REFRESH</button>
      </div>)
      : (<Courses courses= {courses} buyCourse={buyNewCourse}/>)}
    </>
    )} 
  </div>
  )
}

export default App
