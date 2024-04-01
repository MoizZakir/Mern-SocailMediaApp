import React, { useContext, useEffect } from 'react'
import Topbar from '../../components/topbar/Topbar'
import {Sidebar }from '../../components/sidebar/Sidebar'
import {Feed} from '../../components/feed/Feed'
import {Rightbar} from '../../components/rightbar/Rightbar'

import   './Home.css'
import { AuthContext } from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom'

function Home({profile,
  setProfile}) {
    const {user}=useContext(AuthContext)
    user && localStorage.setItem('token',user?._id)
    
    console.log(user)
    
  return (
    <>
    {!user?<Navigate to='/' />

:(<div>
  <Topbar/>
<div className="bodyContainer">

<Sidebar  />
<Feed />
<Rightbar profile={profile}
setProfile={setProfile}/>
</div>
</div>
)}
</>
  )
}

export default Home