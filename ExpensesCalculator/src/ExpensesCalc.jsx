import React, { useState, useRef, useEffect } from "react";
import Title from "../components/Title";
import { ExpensesForm} from "./ExpensesForm";
import { ExpensesList} from "./ExpensesList";
import { BudgetStyle } from "../styles/BudgetStyle";
import { v4 as uuidV4 } from "uuid";
const initialExpense = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

export default function ExpensesCalcApp() {
  // state values
  // All expenses
  const [expenses, setExpense] = useState(initialExpense);
  // Single Expense
  const [date, setDate] = useState("");
  // Single Amount
  const [amount, setAmount] = useState("");
  // Single Charge
  const [charge, setCharge] = useState("");
  // Budget
  const [budget, setBudget] = useState("");
  // Id's
  const [id, setId] = useState(0);
  // Edit?
  const [edit, setEdit] = useState(false);
  // Alert
  const [alert, setAlert] = useState({ show: false });
  // Handlers

  // handle Budget
  const changeBudget = (e) => {
    // setBudget(e.target.value);
    setBudget(inputBudget.current.value);
  };

  const handleCharge = (e) => {
    setCharge(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = (e) => {
    let edit
    e.preventDefault()
    if (date !== '' && charge !== '' && amount > 0) {
      if (edit) {
        let tempExpense = expenses.map((item) => {
          return item.id == id ? { ...item, date, charge, amount } : item
        })
        setExpense(tempExpense)
      }
    } else {
      const singleExpense = { id: uuidv4(), date, charge, amount }
      setExpense(...expenses, singleExpense)
    }
  }

  let inputBudget = useRef(null)
  useEffect(() => {
    inputBudget.current.value === "" && inputBudget.current.focus()
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <main className="container">
      <Title text={'Expenses Calculator'} style={{ fontWeight: 700 }} />
      {/* <AlertComp/>*/}
      <div className='d-flex'>
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
                  ref={inputBudget}
                  value={budget}
                  onChange={changeBudget}
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
      <section className='bg-primary text-light' style={{height:"30%"}}>
        <ExpensesList expenses= {expenses} />
      </section>
      </div>
    </main>
  )
}
