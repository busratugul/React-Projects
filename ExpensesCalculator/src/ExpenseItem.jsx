import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'

export const ExpenseItem = ({ charge, date, amount, id, handleEdit, handleDelete}) => {
  return (
    <div className="expense-details">
      <div className="d-flex-flex-column" style={{ alignItems: 'flex-start' }}>
        <h4>{charge}</h4>
        <small className="text-danger">{date}</small>
      </div>
      <div className="text-success">${amount}</div>
      <div>
        <button 
      className='btn btn-sm' 
      onClick={()=>handleEdit(id)}><MdEdit/>
        </button>
        <button 
      className='btn btn-sm' 
      onClick={()=>handleDelete(id)}><MdDelete/>
        </button>
        </div>
    </div>
  )
}
