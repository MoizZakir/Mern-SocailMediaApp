import React, { useContext, useEffect, useState } from 'react'
import './sidebar.css'

import { SlFeed } from "react-icons/sl";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";
import { MdGroups2 } from "react-icons/md";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';




export const Sidebar = () => {
    const navigate=useNavigate()
    const {user:currentUser}=useContext(AuthContext)
    const [userData,setUserData]=useState([])
    useEffect(()=>{
        async function api(){
            
            try {
                
                const user=await axios.get('http://localhost:8000/api/user/all')
                console.log(user)
                const filterData=user?.data?.filter(e=>{
                    return e._id!=currentUser._id
                })
                console.log('filterDarta===> ',filterData)
                setUserData(filterData)
                
                console.log(userData)
            } catch (error) {
                console.log(error)
                
            }
        }
        api()
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebaritems">
            
            <SlFeed/>
            <span><s>Feed</s></span>
        </div>
    
        <div className="sidebaritems">

            <IoChatboxEllipsesSharp/>
            <span><s>Chat</s></span>
        </div>
    
        <div className="sidebaritems">

            <PiVideoFill/>
            <span><s>Videos</s></span>
        </div>
    
        <div className="sidebaritems">

            <MdGroups2/>
            <span><s>Groups</s></span>
        </div>
        <div className="sidebaritems">

            <MdGroups2/>
            <span><s>Groups</s></span>
        </div>
        <div className="sidebaritems">

            <MdGroups2/>
            <span><s>Groups</s></span>
        </div>
        <div className="sidebaritems">

            <MdGroups2/>
            <span><s>Groups</s></span>
        </div>
       
        <div className="">

            <button className='sidebarButton' style={{cursor:"not-allowed"}}>See More</button>
            <hr className='sidebarHr'/>
            Freind Suggestion
            
        </div>

{userData?.map(e=>(
    
     <div className='sidebarFriendList' onClick={()=>window.location=`/profile/${e.username}`}>
     <img className='sidebarFriendImage' src={e?.profilePicture!=''?e?.profilePicture:'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg'} alt="" />
     <span>{e?.username}</span>

 </div>
    

))}
       
        
       
    
        
    
    
    </div>
  )
}
