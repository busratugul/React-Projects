import React, {useState, useEffect} from 'react'
import NavItem from './NavItem'
import {NavStyle} from "./NavStyle"
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function ResponsiveMenu() {

const [show, setShow] = useState({
  navbarNav: true,
  hamburgerIcon: false,
  closeIcon:false,
  navOpened: false
})

useEffect(() => {
  window.onresize = () => {
    let windowWidth = window.innerWidth
    //console.log(windowWidth);
    windowWidth > 600 && setShow({
      navbarNav:true,
      hamburgerIcon: false
      })
      windowWidth < 600 && setShow({
      navbarNav:false,
      hamburgerIcon: true
      })
  }
}, [])

const openNav = () => {
  setShow({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: true,
    navOpened: true
  })
}

const closeNav = () => {
  setShow({
    navbarNav: false,
    hamburgerIcon: true,
    closeIcon: false,
    navOpened: false
  })
}

  return (
    <NavStyle className= {`navbar bg-primary ${show.navOpened && "showNavbar"}`}>
        <div className="navbar-logo">
            <a href="" className='navbar-brand '>HAMBURGER</a>
            {/* open and close icons */}
            { show.hamburgerIcon && <AiOutlineMenu className='iconMenu' onClick={openNav}/>} { show.closeIcon && <AiOutlineClose className='iconClose' onClick={closeNav}/>}
        </div>
        <div className="navbar-collapse">
            {show.navbarNav ? (
            <ul className={`navbar-items bg-primary ${show.navOpened && "showNavbar"}`}>
                <NavItem text={"Home"} active="active"/>
                <NavItem text={"About"}/>
                <NavItem text={"Contact"}/>
            </ul>) :null}
        </div>
    </NavStyle>
  )
}

export default ResponsiveMenu