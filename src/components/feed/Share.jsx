import React, { useContext, useRef, useState } from 'react'
import './feed.css'
import { IoMdPhotos } from "react-icons/io";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { AuthContext } from '../../Context/AuthContext';
import { uploadFile } from '../../fireBase/uploadfile';
import axios from 'axios';
import { useNavigate } from 'react-router';


function Share() {
const navigate=useNavigate()
  const {user}=useContext(AuthContext);
  const desc=useRef();  
  const [img,setImg]=useState(null);
  
  const submitHandler=async(e)=>{
    let post={
      userId:user._id,
      desc:desc?.current.value,
    }
    e.preventDefault()
    console.log(img)
    try {
      
      if (img) {
        const imageName = `${new Date().getTime()}-${img.name}`
        const upload = await uploadFile(img, imageName)
        if (upload.status) {
          post.img = upload.downloadURL
          alert(upload.message)
        } else {
          alert(upload.message)
        }
      }
      if(desc?.current.value=='' && !img){
        return alert('please type some thing')
      }
      const res=  await axios.post("http://localhost:8000/api/post/",post)
      console.log(res)
      alert('dataAdded')
      navigate('/')
      

    } catch (error) {
      alert(error)
    }



    

  }

  return (
    <form className="feedActivities" onSubmit={submitHandler}>
        <div className="postCreate">
          <img src={user?.profilePicture!=''?user?.profilePicture:'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg'} alt="" />
          <input type="text" placeholder="what's on your mind?"  ref={desc}/>
        </div>
        <hr />
        {img &&(<div style={{display:'flex' ,fontSize:"22px" ,color:'red'}}><img style={{width:"700px", height:"200px", objectFit:'cover', marginRight:'10px' }} src={URL.createObjectURL(img)}/> <h6 style={{fontWeight:'bolder', border:"1px solid red" ,height:"30px", width:'30px',borderRadius:"50%", textAlign:'center',paddingTop:'5px'}} onClick={()=>{setImg(null)}}>X</h6></div> )}
        <div className='postFeeling'>
          <label htmlFor='file' className='feelingItems'>
            <IoMdPhotos fill='pink' /> <span>Photos</span>
            <input style={{display:'none'}} type="file"  id='file'  onChange={(e)=>{setImg(e.target.files[0])}}/>
          </label>
          <div className='feelingItems'>
            <PiTagSimpleFill fill='blue' /> <span>Tags</span>
          </div>
          <div className='feelingItems'>
            <FaLocationDot fill='green' /> <span>Location</span>
          </div>
          <div className='feelingItems'>
            <MdEmojiEmotions fill='yellow' /> <span>Feelings</span>
          </div>

          <button type='submit'>Share</button>

        </div>



      </form>
  )
}

export default Share