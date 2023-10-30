import React, { useRef, useEffect, useState } from 'react'
import './App.css'
import FormGroup from './FormGroup'
import Buttons from './Buttons'
import { LoginContainer, FormAnimation, Form } from './FormStyle'

export const AnimatedLogin = () => {
  let email = useRef()
  let password = useRef()

  useEffect(() => {
    email.current.focus()
  })

  let formStyle = {
    width: 350,
    marginTop: '15vh',
  }

  const [rotate, setRotate] = useState({
    animation:'',
    borderColor:"",
    background:'',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(email.current.value !== "" && password.current.value !== ""){
        setRotate({
            animation:"animate",
            borderColor:"green",
            background:"green"
        })
    }else{
        setRotate({animation:"", borderColor:""})
    }
  }


  return (
      <LoginContainer className={rotate.animation}>
      <FormAnimation
      background= {rotate.background}
      borderColor= {rotate.borderColor}
      className= {rotate.animation}
      ></FormAnimation>
      
       
        <form 
        style={formStyle} 
        className="card m-auto shadow p-4" 
        onSubmit={handleSubmit}>

          <Form>
          <h2 className="subtitle my-2 text-center">Login</h2>
            <FormGroup 
            text="Email" 
            inputType="email" 
            reference={email} />

            <FormGroup
              text="Password"
              inputType="password"
              reference={password}
            />

            <Buttons 
            btnClass={'btn-dark w-70'} 
            text={'Submit'}/>

          </Form>

          <small className="text-primary">
            Don't have a account?
          </small>

          <button className="btn btn-link register">Register</button>

        </form>
      
    </LoginContainer>
  )
}
