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
        console.log('===>', profileImg)
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
    <img src={user?.coverPicture || 'data:image/jpeg;base64,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'} alt="" />
            </div>
            <div className="profileUserpic">
                
                <img src={user?.profilePicture || 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg'}  alt="" />
            </div>
            {(user?._id==currentUser?._id)?(
            <div style={{display:"flex", position:'absolute'}}>
                <label style={{margin:'10px', fontSize:'35px'}} htmlFor="profilepicture"><CgProfile /></label>
                <input style={{display:'none'}} id='profilepicture' type="file" onChange={(e)=>setProfileImg(e.target.files[0])} />
                <label  style={{margin:'10px', fontSize:'35px'}}  htmlFor="coverpic"><FaCcDiscover /></label>
                <input  style={{display:'none'}} id='coverpic' type="file" onChange={(e)=>setCoverImg(e.target.files[0])} />
               {(profileImg?.name || coverImg?.name )? <button style={{height:"30px" ,width:"70px", margin:'26px 0'}} onClick={()=>(profileImg || coverImg)?picUpload():alert("please add Picture")}>Uplaod</button>:""} 
                
            </div>):''}
                <div className='profileDetail'>
                    
                    <h1>{user?.username?.slice(0,1).toUpperCase()+user?.username?.slice(1)}</h1>
                </div>
            
        </div>
        <div className='profileRightBottom'>

        <Feed username={username} className='feed '/>
        <Rightbar username={username} data={1} user={user} className='rightbar'/>
    </div>
    </div>
        
        
    </div>
    </div>):<Navigate to='/'/>}
    </>
  )
}
