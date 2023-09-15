import React from 'react'
import './styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
        <div className='icons'>
        <FacebookIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        </div>
        <p> Tüm Hakları Saklıdır - BurgerYiyelim © </p>
    </div>
  )
}

export default Footer