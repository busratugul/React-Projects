import React, { useEffect, useRef, useState } from 'react'
import FormGroup from './FormGroup'
import CompoundInterestRateCalc from './CompoundInterestRateCalc'

function CompoundInterestRateApp() {
  const [compound, setCompound] = useState({
    principleAmount: '',
    monthlyContribution: null,
    interestRate: '',
    years: '',
  })
  document.body.style.background = `#2174af`
  let inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="container">
      <div
        className="card card-primary bg-warning shadow text-dark m-auto mt-4 "
        style={{ maxWidth: 300 }}
      >
        <div className="card-body">
          <FormGroup
            text="Principle Amount $"
            inputType="number"
            values={compound.principleAmount}
            onChange={(e) =>
              setCompound({ ...compound, principleAmount: e.target.value })
            }
            reference={inputRef}
          />
          <FormGroup
            text="Monthly Contribution $"
            inputType="number"
            values={compound.monthlyContribution}
            onChange={(e) => setCompound({...compound, monthlyContribution: e.target.value})}
          />
          <FormGroup
            text="Interest Rate %"
            inputType="number"
            values={compound.interestRate}
            onChange={(e) => setCompound({...compound, interestRate: e.target.value})}
          />
          <FormGroup
            text="Years Of Invesment"
            inputType="number"
            values={compound.years}
            onChange={(e) => setCompound({...compound, years: e.target.value})}
          />
        </div>

        <div
          className="card-footer text-end text-light fs-lg fw-medium" 
          style={{ backgroundColor: '#7f37f9'}}>
          <CompoundInterestRateCalc
          principleAmount={compound.principleAmount}
          monthlyContribution={compound.monthlyContribution}
          interestRate={compound.interestRate}
          years={compound.years}
          />
        </div>
      </div>
    </div>
  )
}

export default CompoundInterestRateApp
