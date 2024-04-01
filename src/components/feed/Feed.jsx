import React, { useContext, useEffect, useState } from 'react'
import './feed.css'
import axios from 'axios';

import { Post } from './Post';
import Share from './Share';
import { AuthContext } from '../../Context/AuthContext';





export const Feed = ({username}) => {
  const {user}=useContext(AuthContext)
  console.log(username)
  const [postData,setPostData]=useState([])

  
  useEffect(()=>{
    const getData=async()=>{
      const res= username? await axios.get(`http://localhost:8000/api/post/profile/${username}`)
      :await axios.get(`http://localhost:8000/api/post/timeline/${user._id}`)
      setPostData(res.data?.sort((p1,p2)=>{
        return new Date(p2.createdAt)-new Date(p1.createdAt)
      }))
      console.log(res)}
      getData()
  },[user._id])
  
  
  return (
    <div className='feed'>


    
     {!username?<Share/>:''}
    

      <div className="allPosts">
        {postData?.map((e,i)=>(
      
          

            <Post key={i} Postdata={e} />)
          )

        }
       
      </div>
      



    </div>
  )
}
