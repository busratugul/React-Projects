import React from 'react'
import { Link } from 'react-router-dom'
import BannerImg from '../assets/banneryeni2.jpg'
import '../styles/home.css'

function Home() {
  return (
    <div >
        <div className='mainPage' style={{backgroundImage:`url(${BannerImg})`}}>
        <Link to="/menu">
            <button>
                SİPARİŞ VER
            </button>
        </Link>
        </div>
    </div>
  )
}

export default Home