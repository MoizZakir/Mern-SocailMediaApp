import React from 'react'
import './feed.css'
import { IoMdPhotos } from "react-icons/io";
import { PiTagSimpleFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";


export const Feed = () => {
  return (
    <div className='feed'>



      <div className="feedActivities">
        <div className="postCreate">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
          <input type="text" placeholder="what's on your mind?" />
        </div>
          <hr/>
          <div className='postFeeling'>
            <div className='feelingItems'>
            <IoMdPhotos fill='pink'/> <span>Photos</span>
            </div>
            <div className='feelingItems'>
            <PiTagSimpleFill fill='blue'/> <span>Tags</span>
            </div>
            <div className='feelingItems'>
            <FaLocationDot fill='green'/> <span>Location</span>
            </div>
            <div className='feelingItems'>
            <MdEmojiEmotions fill='yellow'/> <span>Feelings</span>
            </div>
            
            <button>Share</button>

          </div>



      </div>



      
    </div>
  )
}
