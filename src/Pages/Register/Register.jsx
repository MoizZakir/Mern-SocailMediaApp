import React from 'react'
import './login.css'

export default function Register  () { return (
    <>
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="Title">
                    Create Account
                </h3>
                <span className='loginpara'>
                    Connect with freinds and the  World arround you on  MoizSocial
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input type="text" placeholder='UserName' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <input type="password" placeholder='ConfirmPassword' />
                <button className='loginbtn'>Register</button>
                
                <button className='newAccount'> Log into  Account</button>
                </div>
            </div>

        </div>
        </div>  
    </>
  )
}
