import React from 'react'

function FormGroup({ text, inputType, values, onChange, reference }) {
  return (
    <div className="text-start fw-medium mb-3 p-3">
      <label>{text}</label>
      <input
        type={inputType}
        className="w-100"
        value={values}
        onChange={onChange}
        ref={reference}
      />
    </div>
  )
}

export default FormGroup
