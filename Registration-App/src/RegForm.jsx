import React, { useRef, useEffect, useState } from 'react'
import Title from './Title';
import Buttons from './Buttons'
import Alert from './Alert';

function RegForm() {

    let inputName = useRef(null)
    let inputEmail = useRef(null)
    let inputPassword = useRef(null)


    useEffect(() => {
        inputName.current.focus()
    }, [])

    const[values, setValues] = useState({
        user_name: '',
        email: '',
        password: ''
    })
    const [submit, setSubmit] = useState(false)
    const [valid, setValid] = useState(false)


    const handleNameChange = (e) => {
        setValues({...values, user_name: e.target.value})
    }
    const handleEmailChange = (e) => {
        setValues({...values, email: e.target.value})
    }
    const handlePasswordChange = (e) => {
        setValues({...values, password: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!values.user_name){
            inputName.current.focus()
        }else if(!values.email){
            inputEmail.current.focus()
        }else if(!values.password){
            inputPassword.current.focus()
        }
        if(values.user_name && values.email && values.password){
        setValid(true)
        }
        setSubmit(true)
        
    }
    

    return (
        
        
        <div>
        {submit && valid 
        ?(
        <>
        <Alert 
        message={"Registration was successful!"}
        delay= {true}
        delayTime= {5000}
        />
        <Title text={`Welcome Back ${values.user_name}`}/>
        </> 
        ):(
        <div className="container m-auto mt-4 p-2 shadow-sm border-5">
            <Title text= "Registration"/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" 
                    placeholder='Enter your name'
                    ref={inputName} 
                    value={values.user_name}
                    onChange={handleNameChange} />

                    {submit && !values.user_name 
                    ?(<label className='text-danger fs-sm'>
                        Please enter your name
                    </label>) 
                    :null}
                </div>

                <div className="form-group">
                    <input type="email" 
                    placeholder='Enter your email'
                    ref={inputEmail} 
                    value={values.email}
                    onChange={handleEmailChange}/>

                    {submit && !values.email 
                    ?(<label className='text-danger fs-sm'>
                        Please enter your email
                    </label>) 
                    :null}
                </div>

                <div className="form-group">
                    <input type="password" placeholder='Enter your password'
                    ref={inputPassword} 
                    value={values.password}
                    onChange={handlePasswordChange}/>

                   {submit && !values.password 
                   ?( <label className='text-danger fs-sm'>
                        Please enter your password
                    </label>)
                    :null}
                </div>

                <Buttons BtnClass={"btn-primary btn-lg btn-block"} text="Register" HandleClick={handleSubmit}/>
            </form>
        </div>
        )}
    </div>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css';
export default RegForm