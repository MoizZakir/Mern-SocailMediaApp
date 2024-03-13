import React from 'react'
import './feed.css'
import { HiDotsVertical } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { IoHeartCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';


export const Post = ({profile,
  setProfile}) => {
  return (
    <div> <div className="post">
    <div className="postTop">
      <div className='postInfo'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
      <span className='postOwner' ><Link to={"/profile"} onClick={()=>{
        setProfile(!profile)
       
      }}>Moiz Zakir </Link></span>
      <span className='postTime'>5 mins Ago</span></div>
      
      <HiDotsVertical  className='postOption'/>
     
    </div>
    <p>this my first post</p>
    <img className='poster' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />

    <div className="postBottom">
      <div className='postReact'>
      <AiFillLike className='like' fill='blue'/>
      <IoHeartCircle className='heart' />
      <p>2 people like it</p>
      </div>
      <div className="postComment">
        2comments

      </div>
    </div>
  </div></div>
  )
}
