import React, { useState } from 'react'
import Title from './Title'
import FormGroup from './FormGroup'
import Buttons from './Buttons'

export const MortgageApp = () => {

  const [homeValue, setHomeValue] = useState('')
  const [downPayment, setDownPayment] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [loanDuration, setLoanDuration] = useState('')
  const [monthlyPayment, setMonthlyPayment] = useState('')

  function calculateLoanAmount() {
    setLoanAmount(homeValue - downPayment)
    return loanAmount
  }

  function calculateMonthlyPayment(){
    function percentageToDecimal(percent){
      return percent / 12 / 100
    }
    function yearsToMonths(){
      return years * 12
    }
    setMonthlyPayment(percentageToDecimal(interestRate) * loanAmount)
    / (1 - Math.pow(
    1+percentageToDecimal(interestRate),
    - yearsToMonths(loanDuration)))

    return monthlyPayment
  }

  let alertClass;
  monthlyPayment 
  ?(alertClass="alert alert-success") 
  :alertClass="alert alert-danger"

  return (
    <div
      className="container mt-4 card shadow text-center"
      style={{ width: 500, backgroundColor:"#a2dee85c" }}
    >
      <Title text="Mortgage Calculator App" />
      <form onSubmit={(e) => e.preventDefault()} className="p-3">
        <div
          className="d-grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
        >
          <FormGroup
            labelText={'Home Value'}
            inputType='number'
            placeholder={'Enter the value of the home'}
            values={homeValue}
            onInput={(e) => setHomeValue(e.target.value)}
            onKeyUp={calculateLoanAmount}
          />
          <FormGroup
            labelText={'Down Payment'}
            inputType='number'
            placeholder={'Enter your funds'}
            values={downPayment}
            onInput={(e) => setDownPayment(e.target.value)}
            onKeyUp={calculateLoanAmount}
          />
        </div>
        <div>
          <FormGroup
            labelText={'Loan Amount'}
            inputType='number'
            placeholder={'The calculated amount of loan'}
            readOnly= {true}
            values={loanAmount}
            style={{backgroundColor: "#e9ecef"}}
            className={"border-light"}
          />
        </div>
        <div
          className="d-grid"
          style={{ gridTemplateColumns: '1fr 1fr', gap: 10 }}
        >
          <FormGroup
            labelText={'Interest Rate %'}
            inputType='number'
            placeholder={'Enter your interest rate'}
            values={interestRate}
            onInput={(e) => setInterestRate(e.target.value)}
          />
          <FormGroup
            labelText={'Loan duration (years)'}
            placeholder={'Enter the duarition of your loan in years'}
            values={loanDuration}
            onInput={(e) => setLoanDuration(e.target.value)}
          />
        </div>
        <Buttons 
        BtnClass={'btn-info w-100 mt-3'} 
        text={'Calculate'}
        HandleClick={calculateMonthlyPayment} />
        
          <h4
            role="alert"
            className={`${alertClass}`}
            style={{ width: 'auto', margin: '1rem 0' }}
          >
            {monthlyPayment 
            ?`Monthly Payment: ${monthlyPayment.toFixed(2)}`
            :"Complete all fields"}
          </h4>
        
      </form>
    </div>
  )
}
