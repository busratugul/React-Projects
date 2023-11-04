import React, { useContext } from 'react'
import Buttons from './Buttons'
import Alert from './Alert'
import { AuthContext } from '../context/authContext'

export const Auth = () => {
  const auth = useContext(AuthContext);
  //console.log(auth);
  return <div>
    {auth.status === null 
    ?("") 
    :auth.status === true 
    ?(<Alert 
    alertClass={"alert-success"}
    message={"Success"}/>)
    :null}

    {auth.status === null 
    ?(<Buttons
    BtnClass={"btn-success w-100"}
    text="Login"
    HandleClick={auth.login}/>)
    :auth.status === true 
    ?(<Buttons
    BtnClass={"btn-danger w-100"}
    text="Log Out"
    HandleClick={auth.logout}/>)
    :(<Buttons
    BtnClass={"btn-primary w-100"}
    text="Try Again"
    HandleClick={auth.login}/>)}

  </div>
}
