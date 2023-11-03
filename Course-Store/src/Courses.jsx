import React from 'react'
import { Course } from './Course'

export const Courses = ({ list }) => {
  return (
    <ul 
    className='d-flex mt-3' 
    style={{flexWrap: "wrap", gap: 30, listStyle: "none"}}>
        {
            list.map((item) => (
                <Course key={item.id} course={item}/>
            ))
        }
    </ul>
  )
}
