import React from 'react'

function FormGroup({ 
    labelText,
    inputType,
    placeholder,
    values,
    onInput,
    onKeyUp,
    onChange,
    className,
    readOnly=false,
    reference
     }) {
  return (
    <div className="form-group d-flex flex-column me-3">
      <label className="mb-2">{labelText}</label>
      <input 
      type={inputType} 
      placeholder={placeholder} 
      value={values}
      onInput={onInput}
      onKeyUp={onKeyUp}
      onChange={onChange}
      className={className}
      readOnly={readOnly}
      ref={reference}
      />
    </div>

  )
}

export default FormGroup
