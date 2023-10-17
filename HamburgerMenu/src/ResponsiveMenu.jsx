import React from 'react'
import NavItem from './NavItem'
import {NavStyle} from "./NavStyle"

function ResponsiveMenu() {
  return (
    <NavStyle className="navbar bg-primary text-light">
        <div className="navbar-logo d-flex ">
            <a href="" className='navbar-brand'>HAMBURGER</a>
            {/* open and close icons */}
        </div>
        <div className="navbar-collapse">
            <ul className="navbar-items">
                <NavItem text={"Home"} active="active"/>
                <NavItem text={"About"}/>
                <NavItem text={"Contact"}/>
            </ul>
        </div>
    </NavStyle>
  )
}

export default ResponsiveMenu