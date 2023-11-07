import React, { useState, useRef, useEffect } from 'react'
import Title from '../components/Title'
import { ExpensesForm } from './ExpensesForm'
import { ExpensesList } from './ExpensesList'
import { BudgetStyle } from '../styles/BudgetStyle'

const expensesJSON = localStorage.getItem('expenses');
const initialExpenses = expensesJSON ? JSON.parse(expensesJSON) :[ ];

export const ExpensesCalc = () => {
  // States Values
  const [expenses, setExpenses] = useState(initialExpenses)
  const [date, setDate] = useState('')
  const [amount, setAmount] = useState('')
  const [charge, setCharge] = useState('')
  const [budget, setBudget] = useState('')
  //Handlers
  const onChangeBudget = (e) => {
    setBudget(inputBudget.current.value)
  }

  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
    let tempExpense = expenses.map(item => {
      return item
    })
    setExpenses(tempExpense)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  let inputBudget = useRef(null)
  useEffect(() => {
    inputBudget.current.focus()
    localStorage.setItem('expenses',JSON.stringify(expenses))
  }, [expenses])

  return (
    <main className="container">
      <Title text={'Expenses Calculator'} style={{ fontWeight: 700 }} />
      {/* <AlertComp/>*/}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '25px',
          margin: '1rem',
        }}
      >
        <aside>
          <ExpensesForm
            date={date}
            handleDate={handleDate}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
          />
          <section className="card text-right shadow mt-2 bg-primary text-light">
            <div className="card-body">
              <BudgetStyle>
                <h4 className="fw-bold">Budget: $ </h4>
                <input
                  type="number"
                  value={budget}
                  onChange={onChangeBudget}
                  ref={inputBudget}
                  className="ms-3 w-50"
                />
              </BudgetStyle>
              <h5 className="mb-1">Total expenses: $ </h5>
              {/* Calc Economises */}
              <h5>Economies: $ </h5>
            </div>
          </section>
        </aside>
      </section>
      <section>
        <ExpensesList />
      </section>
    </main>
  )
}
