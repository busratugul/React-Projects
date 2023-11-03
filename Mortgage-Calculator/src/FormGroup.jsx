import React from 'react'
import { useRef, useEffect } from 'react'

function FormGroup({inputType, values, onInput, reference, labelText, placeholder, readOnly= false, className, style, onKeyUp }) {


  return (
    <div className='text-start fw-medium mt-3 p-2'>
        <label >{labelText}</label>
        <input 
        className={`w-100 p-1 ${className}`}
        type={inputType} 
        value={values}
        onChange={onInput}
        ref= {reference}
        placeholder={placeholder}
        readOnly= {readOnly}
        style={style}
        onKeyUp={onKeyUp}
        />
    </div>
  )
}

export default FormGroup