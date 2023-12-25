import React, { useState, useEffect } from 'react'
import List from './List'
import Form from './Form'
import './Style.css'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Busra Tugul',
      phone_number: '349 783 9583',
    },
    {
      fullname: 'Onur Tugul',
      phone_number: '283 743 8297',
    },
    {
      fullname: 'Lili Tugul',
      phone_number: '934 743 8297',
    },
    {
      fullname: 'Lulu Tugul',
      phone_number: '934 743 8297',
    },
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
