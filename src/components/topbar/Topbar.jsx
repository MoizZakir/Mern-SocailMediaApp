import React, { useContext, useRef } from 'react'
import "./topbar.css"
import { IoSearchOutline } from "react-icons/io5";
import { IoMdPerson, IoMdPower } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';

function Topbar() {
    const logOuthanlder=()=>{
        localStorage.clear();
        window.location.reload()
    }
    const naviage=useNavigate()
    let username=useRef()
    const searchHandler=async(e)=>{
        if(e.key=="Enter"){
            
        try {
            const user=await axios.get(`http://localhost:8000/api/user/?username=${username.current}`)
            console.log(user)
            if(user?.data){
                naviage(`/profile/${user?.data.username}`)
                

            }
            else{
                
            }
        } catch (error) {
            alert(error.response?.data?.message)
            // console.log('asios error...',error)
            // console.log('axios console....',error.response?.data?.message);
            
        }}

    }
    const {user}=useContext(AuthContext)
    function moiz(e){
        console.log(e.key)
    }
    console.log(user)
    return (
        <>
            <div className='topbardiv'>
                <div className='topbarlogo'>
                    <span>MoizSocial Media</span>
                </div>
                <div className="topbarSearch">
                    <span><IoSearchOutline fontSize="20px"/></span>
                    <input type="text" placeholder='Serch Freind and Post' onChange={(e)=>username.current=e.target.value}  onKeyDown={searchHandler} />
                </div>

                <div className='topbarRight'>
                    <div className="topbarlinks">
                        <span style={{cursor:'pointer'}} onClick={()=>naviage('/')}>HomePage</span>
                        <span><s>TimeLine</s>  </span>
                    </div>
                    <div className="topbarAlerts">
                        <div><s><IoMdPerson fontSize="20px"/><span className='warn'>1</span></s></div>
                        <div><s><MdMessage fontSize="20px"/><span className='warn'>1</span></s></div>
                        <div style={{cursor:'pointer'}}><IoMdPower fontSize="23px" onClick={logOuthanlder}/></div>
                        <Link  to={`/profile/${user.username}`}>
                        
                        <img src="data:image/jpeg;base64,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" alt="" />
                        </Link>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Topbar