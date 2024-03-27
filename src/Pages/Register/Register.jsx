import React, { useContext, useRef } from 'react'
import './login.css'
import { AuthContext } from '../../Context/AuthContext'
import { Navigate,useNavigate } from 'react-router-dom'


import axios from 'axios'

export default function Register  () {
    const {user}=useContext(AuthContext);
    const navigate=useNavigate()
    
    const username=useRef()
    const email=useRef()
    const password=useRef()
    const confirmPassword=useRef()


    const handleClick=async(e)=>{
        e.preventDefault()
        if(password.current.value!==confirmPassword.current.value){
            password.current.setCustomValidity('Password does not match !')
        }
        else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try {

                
                const res=await axios.post('http://localhost:8000/api/auth/signup',user)
                if(res.data){

                    alert('Signup Succefully')
                    navigate('/')
                }
                else{
                    alert("Something Wrong")
                }
                console.log(res)
                
            } catch (error) {
                console.log(error)
                alert(error)
                
            }
        }
    }
    return (
    
    <>
    {!user?(

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
                <form className="loginBox" onSubmit={handleClick}>
                <input type="text" placeholder='UserName'ref={ username} />
                <input type="text" placeholder='Email'ref={email} />
                <input type="password" placeholder='Password'ref={password} />
                <input type="password" placeholder='ConfirmPassword'ref={confirmPassword} />
                <button className='loginbtn' type='submit'>Register</button>
                
                <button className='newAccount' > Log into  Account</button>
                </form>
            </div>

        </div>
        </div>  ):<Navigate to='/'/>}
    </>
  )
}
