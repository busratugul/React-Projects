import React from 'react'
import Buttons from './Buttons'
import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa'

export const Search = ({ handleToogleContacts, handleToogleSortAZ, handleSearch }) => {
  return (
    <section
      className="text-center d-flex p-3 shadow"
      style={{ justifyContent: 'center' }}
    >
      <Buttons
        icon={<FaAddressBook />}
        BtnClass={'btn-outline-light'}
        text={' '}
        HandleClick={handleToogleContacts}
      />

      <input
        placeholder="Search by firstname..."
        className="mb-2 mx-1"
        style={{ padding: '0.3rem 0.5rem' }}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Buttons
        icon={<FaArrowsAltV />}
        BtnClass={'btn-outline-light'}
        text={' '}
        HandleClick={handleToogleSortAZ}
      />
    </section>
  )
}
