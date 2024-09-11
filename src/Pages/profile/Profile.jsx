import React, { useContext, useEffect, useState } from 'react'
import { CgProfile } from "react-icons/cg";
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
import { FaCcDiscover } from 'react-icons/fa6';
import { usePicture } from '../../Hooks/Picturesupload';

export const Profile = ({}) => {
        const [user,setUser]=useState({})
        const {user:currentUser}=useContext(AuthContext)
        const {username} = useParams()
        const [profileImg,setProfileImg]=useState(null);
        const [coverImg,setCoverImg]=useState(null);

        console.log('===>', username)
        useEffect(()=>{
            const getUser=async()=>{
                try {
                    const res= await axios.get(`http://localhost:8000/api/user?username=${username}`)
                    
                    setUser(res.data)
                    console.log(res)}
                 catch (error) {
                    console.log(error)
                    
                }}
            console.log(user)
            getUser()
          },[username])
        
          async function picUpload(){
            if(profileImg){

                await usePicture(profileImg,currentUser,'profile')
            }
            if(coverImg){

                await usePicture(coverImg,currentUser,'cover')
            }

          }
       
        console.log(username)


      
  return (
    <>{currentUser?(
        <div>
        <Topbar/>
    <div className='Porfile'>
        
    
      
    <Sidebar className='sidebar'/>
    <div className="profileRight">
        <div className="profileRightTop">
        <div className='profileCoverPic'>
    <img src={currentUser?.coverPicture || ''} alt="" />
            </div>
            <div className="profileUserpic">
                <img src={currentUser?.profilePicture || ''}  alt="" />
            </div>
            {(user?._id==currentUser?._id)?(
            <div style={{display:"flex",justifyContent:'center'}}>
                <label style={{margin:'10px', fontSize:'35px'}} htmlFor="profilepicture"><CgProfile /></label>
                <input style={{display:'none'}} id='profilepicture' type="file" onChange={(e)=>setProfileImg(e.target.files[0])} />
                <label  style={{margin:'10px', fontSize:'35px'}}  htmlFor="coverpic"><FaCcDiscover /></label>
                <input  style={{display:'none'}} id='coverpic' type="file" onChange={(e)=>setCoverImg(e.target.files[0])} />
                <button onClick={()=>(profileImg || coverImg)?picUpload():alert("please add Picture")}>Uplaod</button>
                
            </div>):''}
                <div className='profileDetail'>
                    
                    <h1>{user?.username?.slice(0,1).toUpperCase()+user?.username?.slice(1)}</h1>
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
