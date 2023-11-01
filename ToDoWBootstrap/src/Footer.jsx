import React from 'react'

export const Footer = () => {
    const date = new Date()
  return (
   <footer>
    <small className='text-secondary position-fixed bottom-0 start-50 translate-middle-x '>Copyright {date.getFullYear()} | BusraTugul </small>
   </footer>
  )
}
