import React, {useState, useEffect} from 'react'
import Buttons from './Buttons'
import {BsFillEmojiFrownFill,BsFillEmojiSmileFill} from "react-icons/bs"


function Dialog({ width= "350px" }) {
    const [subscription, setSubscription] = useState({
      title: "Hello",
      description: "Would you like to subscribe?",
      state: null,
      justifyContent: "space-between"
    })

    const handleSubscribe = () => {
      setSubscription({
      title: "Thank you",
      description: "for your subcription",
      state: "subscribed",
      justifyContent: "center"
      })
    }

    const handleUnscribe = () => {
      setSubscription({
        title: "Sorry",
        description: "to see you go",
        state: "unsubscribed",
        justifyContent:"flex-end"
      })
    }

    const [icon, setIcon] = useState()
    let iconStyle = {
      fontSize: "80px",
      justifySelf: "center",
      color: subscription.state === "subscribed" 
      ?"rgba(59,137,90,0.4)" 
      :"rgba(25,118,160,0.4)"
    }

    useEffect(() => {
      if(subscription.state === "unsubscribed"){ setIcon(<BsFillEmojiFrownFill style={iconStyle}/>,
      (document.body.style.background = "rgba(25,118,160,0.4)"))
    }else {
      subscription.state === "subscribed" && setIcon(<BsFillEmojiSmileFill style={iconStyle}/>),
      (document.body.style.background = "rgba(59,137,90,0.4)")
    }}, [subscription.state])

    const [bounce, setBounce] = useState("")
    useEffect(() => {
    setTimeout(() => {
      setBounce("")
    },500)
    return () => setBounce("bounce")
    }, [subscription.state])
    
    
  return (
<div className={`card bg-light m-auto mt-4 ${bounce}`} style={{width: width, height: "200px"}}> 
    <div className="card-body">
        <div className="d-grid" style={{gridTemplateColumns: "2fr 1fr", 
          alignItems: "center",  
          alignSelf: "center",
          justifyContent: "center" }}>
        <section>
            <h3 className='card-title'>{subscription.title}</h3>
            <h5 className='card-text'>{subscription.description}</h5>
        </section>
        <div>{icon}</div>
        </div>
    </div>
    <hr />
    <div className='d-flex mb-2 px-1 text-end' style={{justifyContent:`${subscription.justifyContent}`}}>
      
        { subscription.state === null && (
        <Buttons BtnClass={"btn-secondary"} text= {"Cancel"} />)}

        {subscription.state === "subscribed" ?null :<Buttons BtnClass={"btn-success"} text= {"Subscribe"} HandleClick = {handleSubscribe}/>}

        {subscription.state === "subscribed" ?(<Buttons BtnClass={"btn-danger"} text= {"Unsubscribe"} HandleClick = {handleUnscribe} />) :null }
    </div>
</div>
  )
}

export default Dialog