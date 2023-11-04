import React, { useState, useRe, useEffect, useRef } from 'react'
import Title from './Title'
import FormGroup from './FormGroup'
import { Wrapper } from './WrapperStyle'
import { Auth } from './Auth'
import { AuthContext } from '../context/authContext'

export const AuthApp = () => {
  //Auto Focus
  const inputName = useRef(null)
  useEffect(() => {
    inputName.current.focus()
  }, [inputName])

  //UI Control
  const [ui, setUi] = useState({
    wrapper: true,
    title: 'Authenticate',
  })
  //Animation State
  const [animatedDenied, setAnimatedDenied] = useState(false)

  //Control Name And Password
  const [userAuth, setUserAuth] = useState({
    name: '',
    password: '',
  })

  const handleChangeName = (e) => {
    setUserAuth({ ...userAuth, name: e.target.value })
  }
  const handleChangePassword = (e) => {
    setUserAuth({ ...userAuth, password: e.target.value })
  }

  const [authStatus, setAuthStatus] = useState(null)
  const login = () => {
    if (userAuth.name === 'Busra' && userAuth.password === '1234')
    //bu veriler backendden gelenle uyuşmalı kontrolü yapıyoruz
   {
      setAuthStatus(true)
      clearInputs()
      authenticate()
    }else {
      setAuthStatus(false)
      setAnimatedDenied(true)
      setTimeout(() => {
        setAnimatedDenied(false)
      },600)
    }
  }

  function clearInputs() {
    setUserAuth({
      name: '',
      password: '',
    })
  }

  function authenticate(){
    setUi({wrapper:false, title:`Welcome ${userAuth.name}`})
  }

  const logout = () => {
    window.location.reload(true)
  }
  return (
    <div
      className="container bg-light mt-5 shadow rounded"
      style={{ width: 300 }}
    >
      <Title text={ui.title} />
      <AuthContext.Provider
        value={{ status: authStatus, login: login, logout: logout }}
      >
        {ui.wrapper && (
          <Wrapper className={animatedDenied && 'active'}>
            <FormGroup
              labelText={'Username'}
              inputType="text"
              placeholder={'Enter your name'}
              values={userAuth.name}
              reference={inputName}
              onInput={handleChangeName}
            />

            <FormGroup
              labelText={'Password'}
              inputType="password"
              placeholder={'Enter your password'}
              values={userAuth.password}
              onInput={handleChangePassword}
            />
          </Wrapper>
        )}
        <Auth />
      </AuthContext.Provider>
    </div>
  )
}
