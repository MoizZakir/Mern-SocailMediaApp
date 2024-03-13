import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import {Sidebar }from '../../components/sidebar/Sidebar'
import {Feed} from '../../components/feed/Feed'
import {Rightbar} from '../../components/rightbar/Rightbar'

import   './Home.css'

function Home({profile,
  setProfile}) {
  return (
    <div>
        <Topbar/>
    <div className="bodyContainer">
      
    <Sidebar  />
    <Feed profile={profile}
setProfile={setProfile}/>
    <Rightbar profile={profile}
setProfile={setProfile}/>
    </div>
    </div>
  )
}

export default Home