import React, { useState } from 'react'
import Buttons from './Buttons'
import { Courses } from './Courses'
import { coursesDB } from '../db/CoursesDb'
import { currenciesDB } from '../db/CurrenciesdB.JSX'
import { CurrencyContext } from '../context/currencies-context'

document.body.style.backgroundColor = '#282c34'
document.body.style.color = '#eee'

export const CourseStore = () => {

const [currency, setCurrency] = useState(currenciesDB.Euro)

  return (
    <CurrencyContext.Provider value={currency}>
    <>
      <div
        className="bg-light py-2 px-3 text-dark shadow d-flex"
        style={{justifyContent:"space-between"}}
      >
       <div> <h6 className="my-2 ms-auto">Change Currency</h6></div>
       <div className='d-flex'>
        {Object.values(currenciesDB).map(cur=> (
            <Buttons 
            key={cur.label} 
            BtnClass={'btn-dark btn-sm ms-2'}
            text={cur.code}
            HandleClick={() => setCurrency(cur)} />
        ))}</div>
        
      </div>
      <div className="container p-1">
        <header className="text-center my-4">
          <h1 className="title fx-xl">COURSES</h1>
          <h4 className="text-uppercase mb-2">Become a web developer</h4>
          <small className="mx-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
            harum.
          </small>
        </header>
        <Courses list={coursesDB} />
      </div>
    </>
    </CurrencyContext.Provider>
  )
}
