import React from 'react'
import Title from './Title'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

export const LazyLoad = ({ title, img }) => {
  return <div className='card shadow mb-4'>
    <div className="card-header">
        {!title 
        ?<Title subtitle={"Subtitle"} text={"Post Title"}/> 
        :<Title text={title}/> }
    </div>
    <div className="card-body d-flex" style={{gap: 10}}>
        <LazyLoadImage 
        src={img} 
        height={"fit-content"} 
        width={500} 
        effect='blur'/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, repellendus?</p>
    </div>
  </div>
}
