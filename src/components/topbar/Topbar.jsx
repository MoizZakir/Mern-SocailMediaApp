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
            console.log('====>>>>>>>',user)
            if(user?.data?.status){
                naviage(`/profile/${user?.data.username}`)
                

            }
            else{
                alert(user?.data?.message)
                
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
                       
                        
                        <img onClick={()=>window.location=`/profile/${user.username}`} src={user?.profilePicture!=''?user?.profilePicture:'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg'} alt="" />
                       
                    </div>

                </div>


            </div>
        </>
    )
}

export default Topbar