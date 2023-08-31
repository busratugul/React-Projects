import Course from './Course'

function Courses({courses,buyCourse}) {
//console.log(courses)

  return (
    <div>
      <div  className="header">
        <h2>MY COURSES</h2>
      </div>

      <div className='courses'>
        {
          courses.map((course) => {
            return (
              <Course key={course.id} {...course} buyOneCourse={buyCourse}/>
              //course={course}
            )
          })
        }
      </div>
    </div>
  )
}

export default Courses