import React from 'react'
import './sidebar.css'

import { SlFeed } from "react-icons/sl";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { PiVideoFill } from "react-icons/pi";
import { MdGroups2 } from "react-icons/md";




export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebaritems">
            
            <SlFeed/>
            <span>Feed</span>
        </div>
    
        <div className="sidebaritems">

            <IoChatboxEllipsesSharp/>
            <span>Chat</span>
        </div>
    
        <div className="sidebaritems">

            <PiVideoFill/>
            <span>Videos</span>
        </div>
    
        <div className="sidebaritems">

            <MdGroups2/>
            <span>Groups</span>
        </div>
        <div className="sidebaritems">

            <MdGroups2/>
            <span>Groups</span>
        </div>
        <div className="sidebaritems">

            <MdGroups2/>
            <span>Groups</span>
        </div>
        <div className="sidebaritems">

            <MdGroups2/>
            <span>Groups</span>
        </div>
       
        <div className="">

            <button className='sidebarButton'>See More</button>
            <hr className='sidebarHr'/>
            
        </div>


        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Jack ma</span>

        </div>
        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Elon Musk</span>

        </div>
        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Billgates</span>

        </div>
        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Ambani</span>

        </div>
        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Ambani</span>

        </div>
        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Ambani</span>

        </div>
        <div className='sidebarFriendList'>
            <img className='sidebarFriendImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUZrYHlA1Omsmisn1UTL18o4pY-X1c6Jmlw&usqp=CAU" alt="" />
            <span>Ambani</span>

        </div>
       
    
        
    
    
    </div>
  )
}
