import React, { useState } from 'react'

function List({ contacts }) {
  const [filterText, setFilterText] = useState('')

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })
  console.log('filtered', filtered)
  return (
    <div>
      <input
        placeholder={'Filter Contact'}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, idx) => (
          <li key={idx}>
            {contact.fullname}: {contact.phone_number}
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'right', paddingRight: '10px' }}>
        <small>Total Contacts: {filtered.length}</small>
      </div>
    </div>
  )
}

export default List
