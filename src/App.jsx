
import { useState } from 'react'
import   './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Profile } from './Pages/profile/Profile'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from  "react-router-dom";

function App() {
  const [profile,setProfile]=useState(false)
  
  
  
  return (
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<Register />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
