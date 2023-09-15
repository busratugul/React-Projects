import React from 'react'
import BannerImg from '../assets/banneryeni.jpg'
import '../styles/about.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${BannerImg})`}}>
        </div>
        <div className='aboutBottom'>
            <h2>Hakkımızda</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugiat? Adipisci voluptatum ratione, amet beatae vel possimus reiciendis quidem odio ex earum magnam alias in culpa eaque debitis natus tempora excepturi nihil nam veniam id. Dolore fugit saepe est ratione maiores iure eveniet quidem at. Cumque odit non ipsum nobis voluptatibus neque quas aliquam repudiandae, blanditiis tempora, pariatur repellat repellendus ipsam voluptas obcaecati. Expedita deleniti voluptates quo perferendis iure reprehenderit dolore corrupti quisquam vel ea? Dolore doloribus ipsam impedit voluptates veritatis, laborum maiores voluptatum eaque quisquam similique velit repellat sunt non quis deleniti nesciunt quo nemo? Tempora beatae ratione dolorum! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error cum accusantium iste, similique velit vitae voluptas laboriosam tempore placeat doloremque optio laudantium quam alias sapiente exercitationem dolor ut maiores? Aspernatur, delectus, modi inventore vel exercitationem dolor dolores eaque sunt enim similique expedita at debitis eveniet ad consequatur, repellendus deserunt eum molestiae quaerat ex. Alias beatae id neque in ipsa dolorum dignissimos debitis culpa earum quidem, numquam corporis quia minus consequatur molestias. Vitae facilis corrupti nulla provident, voluptate exercitationem facere autem laboriosam ex omnis ad magni doloremque. Nulla dolorum aliquid sunt, neque, et inventore iste similique beatae nisi, odio labore.
            <br /></p>
        </div>
    </div>
  )
}

export default About