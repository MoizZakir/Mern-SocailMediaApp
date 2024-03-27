import React, { useContext, useRef } from 'react'
import './login.css'
import { loginCalls } from '../apiCalls'
import { AuthContext } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function 
Login() {
    const {user,isFetching,error,dispatch}=useContext(AuthContext)
    const email=useRef() 

    
    console.log(isFetching)
    const password=useRef() 
    
    const handleClick=(e)=>{
        e.preventDefault()
        loginCalls({email:email.current.value,password:password.current.value},dispatch)
        console.log(email.current.value)

    }
  return (
    <>
    {!user?(
      <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="Title">
                    MoizSocial
                </h3>
                <span className='loginpara'>
                    Connect with freinds and the  World arround you on  MoizSocial
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                <input type="text" required placeholder='Email' ref={email} />
                <input type="password" required placeholder='Password' minLength={6} ref={password} />
                <button className='loginbtn'>{isFetching? 'wait..':'Login'}</button>
                <span>
                    Forget Password?
                </span>
                <button className='newAccount'> Craete new Account</button>
                </form>
            </div>

        </div>
        </div>  ):<Navigate to='/home'/>}
    </>
  )
}
