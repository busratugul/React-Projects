import React from 'react'
import { MdDelete } from 'react-icons/md'
import { ExpenseItem } from './ExpenseItem'

export const ExpensesList = ({ clearItems, expense=[] }) => {
  return (
    <>
      <ul className="list">
        <ExpenseItem/>
      </ul>
      {expense.length>0 
      ?(<button className="btn btn-danger" onClick={clearItems}>
        Clear all expenses
        <MdDelete />
      </button>)
      :null}
    </>
  )
}
