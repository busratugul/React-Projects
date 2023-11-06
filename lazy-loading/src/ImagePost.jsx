import React, { useEffect, useState } from 'react'
import { LazyLoad } from './LazyLoad'
import Title from './Title'

export const ImagePost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => setPosts(json))
    })
    

  return (
    <div className='container'>
        <Title text={"Post Images"} className='text-center'>Post Images</Title>
        <div 
        className="container d-flex flex-column"
        style={{gap: 30}}>

            {posts.map((post) => (
             <LazyLoad 
            key={post.id}
            title={post.title}
            img={post.url} />
            ))}
            

        </div>
    </div>
  )
}
