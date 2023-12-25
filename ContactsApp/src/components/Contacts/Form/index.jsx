import React, { useEffect, useState } from 'react'
import './Style.css'

const initialFormValue = {
  fullname: '',
  phone_number: '',
}

function Form({ addContacts, contacts }) {
  const [form, setForm] = useState(initialFormValue)

  useEffect(() => {
    setForm(initialFormValue)
  }, [contacts])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.fullname === '' || form.phone_number === '') {
      return false
    }
    addContacts([...contacts, form])
    //console.log(form)
    /*  setForm({
      fullname: '',
      phone_number: '',
    }) */
    //setForm(initialFormValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Fullname"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <button className="addBtn">Add</button>
      </div>
    </form>
  )
}

export default Form
