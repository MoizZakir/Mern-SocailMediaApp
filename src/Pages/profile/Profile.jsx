import React from 'react'
import ProfileTop from '../../components/profiles/ProfileTop'
import './profile.css'
import { Feed } from '../../components/feed/Feed'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Rightbar } from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import { data } from '../../Dummydata'
import { useParams } from 'react-router-dom'

export const Profile = ({profile,
    setProfile}) => {
        const mydata=[...data]
        console.log(mydata)
    
        const {username} = useParams()
        console.log(username)
        const filteData=data.find((e)=>e.name==username)
  return (
    
        <><Topbar/>
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
                    <h3>{filteData.name}</h3>
                    <h1>{filteData.id}</h1>
                </div>
            
        </div>
        <div className='profileRightBottom'>

        <Feed filteData={filteData} className='feed '/>
        <Rightbar className='rightbar'/>
    </div>
    </div>
        
        
    </div>
    </>
  )
}
