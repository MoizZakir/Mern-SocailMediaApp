
import { useState } from 'react'
import   './App.css'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Profile } from './Pages/profile/Profile'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [profile,setProfile]=useState(false)
  const router = createBrowserRouter(
   [
    {
      path:'/',
    
      element:<Login/>
    },
    {
      path:'/home',
      element:<Home/>
    },
    {
      path:'/signup',
      element:<Register/>
    },
    {
      path:'/profile',
      element:<Profile />
    },
   ]
  );
 
 
  
  
  return (
    <div >
      <RouterProvider router={router} />
      
      {/* <RouterProvider router={router} /> */}
     
    {/* <Home/> */}
    {/* <Profile/> */}
    {/* <Login/> */}
   
    </div>
  )
}

export default App
