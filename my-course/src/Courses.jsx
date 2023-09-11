import Course from './Course'
import { useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Courses({courses,buyCourse}) {
//console.log(courses)
const [index, setIndex] = useState(0)
const {content, title, price} = courses[index]

console.log(index)

const checkIndex = (index) => {
  if( index < 0) {
    return courses.length -1
  }if(index > courses.length - 1){
    return 0
  }
  return index
}

const getRandomCourse = () => {
  Math.random() *
  setIndex((index) => {
    let idx = index - 1 
    return checkIndex(idx)
  })
}

const prevCourse = () => {
  setIndex((index) => {
    let idx = index - 1 
    return checkIndex(idx)
  })
}

const nextCourse = () => {
  setIndex((index) => {
    let idx = index + 1
  return checkIndex(idx)
  })
}

  return (
    <div>
      <div  className="header">
        <h2>MY COURSES</h2>
      </div>
    
    <button className='random' onClick={getRandomCourse}>
      Random Course
    </button>

      <div className='courses'>
    

    <button className='icon' onClick={prevCourse}>
      <FaChevronLeft/>
    </button>

      <div className="card">
      <h4 className="cardTitle">{title}</h4>
      <p className="content">{content}</p>
      <button className="buyBtn" onClick={() => {
      buyOneCourse(id)
    }}>BUY {price}</button>

    </div>

    <button className='icon' onClick={nextCourse}>
      <FaChevronRight/>
    </button>
       {/*  {
          courses.map((course) => {
            return (
              <Course key={course.id} {...course} buyOneCourse={buyCourse}/>
              //course={course}
            )
          })
        } */}
      </div>
    </div>
  )
}

export default Courses