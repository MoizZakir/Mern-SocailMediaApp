import React from 'react'
import './login.css'

export default function 
Login() {
  return (
    <>
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
                <div className="loginBox">
                <input type="text" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button className='loginbtn'>Login</button>
                <span>
                    Forget Password?
                </span>
                <button className='newAccount'> Craete new Account</button>
                </div>
            </div>

        </div>
        </div>  
    </>
  )
}
