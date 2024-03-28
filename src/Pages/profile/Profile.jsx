import React, { useContext, useEffect, useState } from 'react'
import ProfileTop from '../../components/profiles/ProfileTop'
import './profile.css'
import { Feed } from '../../components/feed/Feed'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Rightbar } from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import { data } from '../../Dummydata'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'

export const Profile = ({}) => {
        const [user,setUser]=useState({})
        const {user:currentUser}=useContext(AuthContext)

        const {username} = useParams()
        useEffect(()=>{
            const getUser=async()=>{
            const res= await axios.get(`http://localhost:8000/api/user?username=${username}`)
            setUser(res.data)
            console.log(res)}
            console.log(user)
            getUser()
          },[])
        // const mydata=[...data]
        // console.log(mydata)
      
    
        console.log(username)
        // const filteData=data.find((e)=>e.name==username)
  return (
    <>{currentUser?(
        <div>
        <Topbar/>
    <div className='Porfile'>
        
    
      
    <Sidebar className='sidebar'/>
    <div className="profileRight">
        <div className="profileRightTop">
        <div className='profileCoverPic'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKivvwviZEIWSn37AktW02XYUiufInNC35dQ&usqp=CAU" alt="" />
            </div>
            <div className="profileUserpic">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            </div>
                <div className='profileDetail'>
                    <h3>c</h3>
                    <h1>{user.username}</h1>
                </div>
            
        </div>
        <div className='profileRightBottom'>

        <Feed username={username} className='feed '/>
        <Rightbar data={1} user={user} className='rightbar'/>
    </div>
    </div>
        
        
    </div>
    </div>):<Navigate to='/'/>}
    </>
  )
}
