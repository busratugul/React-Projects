import React from 'react'


function NavItem({ text,active= "" }) {
  return (
    <li>
      <a href="#" className={`nav-link ${active}`}>
        {text}
      </a>
    </li>
  )
}

export default NavItem