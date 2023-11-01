import React, { useState } from 'react'
import Title from './Title'
import { ContactList } from './ContactList'
import { getContacts } from './db'
import { Search } from './Search'

export const PhoneBook = () => {
  let dbContacts = getContacts()
  const [showContacts, setShowContacts] = useState(false)
  const [sortAz, setSortAz] = useState(true)
  const [searchContact, setSearchContact] = useState('')

  const toogleContacts = () => {
    showContacts ? setShowContacts(false) : setShowContacts(true)
  }

  const toggleSortAZ = () => {
    sortAz ? setSortAz(false) : setSortAz(true)
  }

  return (
    <>
      <Title text={'Phone Book'} />
      <main className="bg-dark text-light p-1">
        <Search
          handleToogleContacts={toogleContacts}
          handleToogleSortAZ={toggleSortAZ}
          handleSearch={setSearchContact}
        />

        <div style={{ overflow: 'auto' }}>
          <h3 className="subtitle text-center mt-2">Display Contacts</h3>

          {showContacts && (
            <ContactList
              contacts={(sortAz
                ? dbContacts.sort((a, b) =>
                    a.first_name.localeCompare(b.first_name)
                  )
                : dbContacts.sort((a, b) =>
                    b.first_name.localeCompare(a.first_name)
                  )
              ).filter((contact) => {
                if (searchContact === '') {
                  return contact
                } else if (
                  contact.first_name
                    .toLocaleLowerCase()
                    .includes(searchContact.toLowerCase())
                ) {
                  return contact
                }
              })}
            />
          )}
        </div>
      </main>
    </>
  )
}
