import React from 'react'
import './styles/Navbar.css'
import BurgerLogo from './assets/burgerlogo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='navbar'>
      <div className='main'>
        <Link to="/menu"><img src={BurgerLogo} alt="Hemen Sipariş Ver" /></Link>
        <div className='link'>
        <Link to="/"> Anasayfa </Link>
        <Link to="/menu"> Menü </Link>
        <Link to="/about"> Hakkımızda </Link>
        <Link to="/contact"> İletişim </Link>
        </div>
      </div>
      </div>
    </>
  )
}

export default Navbar