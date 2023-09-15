import React from 'react'
import BannerImage from '../assets/banner.png'
import '../styles/contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}>

        </div>
        <div className='rightSide'>
            <form>
            <h2>Bizimle İletişime Geçin</h2>
                <label>Ad Soyad</label>
                <input type="text" name='name' placeholder='Lütfen Adınızı ve Soyadınızı Giriniz.'/>
                <label>Email</label>
                <input type="email" name='email' placeholder='Lütfen Emailinizi Giriniz.'/>
                <label>Mesajınız</label>
                <textarea name="message" cols="10" rows="6" placeholder='Lütfen Mesajınızı Giriniz.'></textarea>

            </form>

            <button className='gonderBtn'>
                    Gönder
            </button>
        </div>
    </div>
  )
}

export default Contact