import React from 'react'
import Buttons from '../components/Buttons'
import FormGroup from '../components/FormGroup'
import { MdEdit, MdAddCircle } from 'react-icons/md'

export const ExpensesForm = ({
  handleSubmit,
  date,
  handleDate,
  charge,
  handleCharge,
  amount,
  handleAmount,
  edit,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="card shadow bg-primary text-light text-center pb-4"
    >
      <div className="card-body">
        <FormGroup
          labelText="Date"
          inputType="date"
          values={date}
          onInput={handleDate}
          style={{cursor:"pointer"}}
        />
        <FormGroup
          labelText="Expense"
          inputType="text"
          values={charge}
          onInput={handleCharge}
          placeholder={'e.g rent'}
          style={{cursor:"pointer"}}
        />
        <FormGroup
          labelText="Amount"
          inputType="number"
          values={amount}
          onInput={handleAmount}
          placeholder={'e.g. 1500'}
          style={{cursor:"pointer"}}
        />
      </div>
      {edit ? (
        <Buttons
          icon={<MdEdit className="btn-icon" />}
          text={'Edit'}
        />
      ) : (
        <Buttons
          BtnClass={'btn-warning'}
          icon={<MdAddCircle className="btn-icon" />}
          text={'Add'}
        />
      )}
    </form>
  )
}
