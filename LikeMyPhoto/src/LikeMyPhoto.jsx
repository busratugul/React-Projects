import React, {useState} from 'react'
import {
  AiOutlineSmile,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiFillCaretDown,
 } from 'react-icons/ai'
import DogyDog from "../image/doggydog.jpg"



function LikeMyPhoto() {

const [like, setLike] = useState(false)
const [count, setCount] = useState(0)

const handleClick = () => {
    if(!like) {
      setLike(true)
      setCount(count+1)
    }else {
      setLike(false)
      setCount(count-1)
    }

}

  return (
  
    <div className='container'>
        <h1 className='header'>
            Like My Photo
        </h1>

        <h3 style={{color: "#333"}}>{`Likes ${count}`}</h3>
        <div className='card' onDoubleClick={handleClick}>
          <h4 ><AiOutlineSmile/> DogyDog </h4>  
          <img src={DogyDog} alt="" />

          <div className='footer'>
            <div className='icon' onClick={handleClick}> 
            { like ?<AiFillHeart style={{color: "red"}}/> 
            :<AiOutlineHeart/>}</div> 
            <div className='icon'><AiOutlineComment/></div>
           </div>
      </div>
    </div>
  )
}

export default LikeMyPhoto