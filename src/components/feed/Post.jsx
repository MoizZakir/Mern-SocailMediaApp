import React, { useContext, useEffect, useState } from 'react'
import './feed.css'
import { HiDotsVertical } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { IoHeartCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import profilepic from '../../assets/download.jpeg'
import axios from 'axios';
import {format} from 'timeago.js'
import { AuthContext } from '../../Context/AuthContext';




export const Post = ({Postdata}) => {
  const [userData,setUserData]=useState({})
  const {user}=useContext(AuthContext)
  const [isLiked,setIsLiked]=useState(false)
  const [like,setLiked]=useState(0)
  console.log(Postdata)
  console.log(user?._id)
  let a=Postdata.likes?.find((e)=>{
    return e==user?._id
  })

 
useEffect(()=>{
  setIsLiked(Postdata.likes.includes(user._id))

},[user._id])


  const likeHandler=async()=>{

try {
  await axios.put(`http://localhost:8000/api/post/${Postdata._id}/like`,{userId:user._id})
  
} catch (error) {
  
}
    setLiked(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
  }

  const deleteHandler=async()=>{
    try {
      
      await axios.delete(`http://localhost:8000/api/post/delete/${Postdata._id}`,{userId:user._id}) ;   
       alert('ok')
    } catch (error) {
      console.log(error)
      
    }
  }
  
  useEffect(()=>{
    const getUser=async()=>{
    const res= await axios.get(`http://localhost:8000/api/user?userId=${Postdata.userId}`)
    setUserData(
      
      
      res?.data)
    console.log(res?.data)}
    getUser()
  },[Postdata.userId])

  

  // console.log(filteData)
  return (
    // <HiDotsVertical  className='postOption'/>
    <div>
       <div className="post" style={{height:!Postdata?.img?"200px":'420'}}>
    <div className="postTop">
      <div className='postInfo'>
        <Link to={`/profile/${userData.username}`}>
      <img src={profilepic} alt="" />
      </Link>
      
      <span className='postOwner'>{userData?.username||'Anonymus'} </span>
      <span className='postTime'>{format(Postdata.createdAt)}</span></div>
     {Postdata.userId==user?._id?(<div className="dropdown ">
  <a  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  <HiDotsVertical  className='postOption'/>
  </a>

  <ul className="dropdown-menu " id="dp"  >
    <li><a className="dropdown-item" href="#">Edit</a></li>
    <li className="dropdown-item" onClick={deleteHandler}>Delete</li>
   
  </ul>
</div>):''} 
      
     
    </div>
    <p style={{textAlign:!Postdata?.img && 'center',fontWeight:!Postdata?.img &&'bold'}}>{Postdata?.desc}</p>
    {Postdata?.img?(<img className='poster' src={Postdata?.img} alt="" />):''
    }
    

    <div className="postBottom" style={{margin:Postdata?.img?'10px':'60px 0px'}}>
      <div className='postReact'>
      <AiFillLike className='like' fill='blue' style={{cursor:'pointer'}}  onClick={()=>{likeHandler()}}/>
      <IoHeartCircle className='heart' />
      <p>{Postdata.likes.length +like} people like it</p>
      </div>
      <div className="postComment">
        2comments

      </div>
    </div>
  </div></div>
  )
}

