import React, { useState, useEffect} from 'react'
import Buttons from './Buttons'
import { CurrencyContext } from '../context/currencies-context'

export const Course = ({ course }) => {
    const { title, img, price } = course;
    const currency = React.useContext(CurrencyContext)
    const contextPrice = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: currency.code,
    }).format(price * currency.conversionRate)

    const [courseBg, setCourseBg] = useState()
    useEffect(() => {
        if(currency.code === "USD"){
        setCourseBg("bg-success")
        }else if(currency.code === "TRY"){
        setCourseBg("bg-danger")
        }else if(currency.code === "GBP"){
        setCourseBg("bg-info")
        }else
        {setCourseBg("bg-warning") 
        }
      }, [currency.code])
    

  return (
    <li
      className={`card ${courseBg} mb-2 shadow text-center m-auto`}
      style={{ width: 250 }}
    >
      <div className="card-header" style={{ fontWeight: 700 }}>
        {title}
      </div>
      <img src={img} alt="course img" style={{ height: '100%' }} />
      <p className="card-body" style={{ fontWeight: 200, fontSize: 14 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta magni
        nisi sunt eum molestias corporis iusto doloremque, dolorem odit
        aspernatur?
      </p>
      <div
        className="card-footer d-flex"
        style={{ justifyContent: 'space-between' }}
      >
        <h6 className="mt-1" style={{ fontWeight:700 }}>{contextPrice}</h6>
        <Buttons BtnClass={'btn-dark btn-sm'} text={'BUY'} />
      </div>
    </li>
  )
}
