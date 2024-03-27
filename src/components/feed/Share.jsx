import React, { useContext, useRef, useState } from 'react'
import './feed.css'
import { IoMdPhotos } from "react-icons/io";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
import { AuthContext } from '../../Context/AuthContext';
import { uploadFile } from '../../fireBase/uploadfile';
import axios from 'axios';


function Share() {

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
      const res=  await axios.post("http://localhost:8000/api/post/",post)
      console.log(res)
      alert('dataAdded')

    } catch (error) {
      alert(error)
    }



    

  }

  return (
    <form className="feedActivities" onSubmit={submitHandler}>
        <div className="postCreate">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
          <input type="text" placeholder="what's on your mind?"  ref={desc}/>
        </div>
        <hr />
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