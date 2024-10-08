import React, { useContext, useEffect, useRef, useState } from 'react'
import './rightbar.css'
import OnlineFreind from './OnlineFreind'
import { AuthContext, finder } from '../../Context/AuthContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { follow, unFollow } from '../../Context/AuthActions'
import { FaEdit } from 'react-icons/fa'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material'
import { IoSend } from 'react-icons/io5'
import { useUpdateUser } from '../../Hooks/UserDataupdate'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const{user:current_user, dispatch}=useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate=useNavigate()
  let name=useRef()
  let city=useRef()
  let country=useRef()
  async function api(){
    const userData={
      username:name.current,
      city:city.current,
      form:country.current

  }
    if(name.current!='')
    {
      userData.username=name.current

    }
    if(city.current!='')
    {
      userData.city=city.current

    }
    if(country.current!='')
    {
      userData.from=country.current

    }
  await useUpdateUser(userData,current_user?._id,navigate,handleClose)

  
  }

  return (
    <div>
      <Button style={{fontSize:'30px'}} onClick={handleOpen}><FaEdit /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <span style={{position:'absolute',top:30,right:20}}>X</span>
          <div>
          <TextField id="standard-basic" label="name" variant="standard" onChange={(e)=>name.current=e.target.value} />
          <TextField id="standard-basic" label="city" variant="standard" onChange={(e)=>city.current=e.target.value} />
          <TextField id="standard-basic" label="country" variant="standard" onChange={(e)=>country.current=e.target.value} /></div>
          <Button onClick={()=>api()} style={{margin:'30px 0'}} variant="contained" endIcon={<IoSend />}>
  Update
</Button>
        </Box>
      </Modal>
    </div>
  );
}



export const Rightbar = ({user,data}) => {

  console.log(user)
  const [friend,setFriend]=useState([])
  const{user:current_user, dispatch}=useContext(AuthContext)
  const [isFriend,setIsFriend]=useState(false)
  const followHandler=async()=>{
    console.log(isFriend)

    try {
      if(isFriend){
        const res= await axios.put(`http://localhost:8000/api/user/${user?._id}/unfollow`,{_id:current_user?._id})
        console.log(res)
        // setIsFriend(()=>{setIsFriend(true)})
        dispatch({type:'UNFOLLOW',payload:current_user?.id})
        location.reload()
       
        
        console.log(current_user)
        
      }
      else{
        const res =await axios.put(`http://localhost:8000/api/user/${user?._id}/follow`,{_id:current_user?._id})
        console.log(res)
        setIsFriend(()=>{setIsFriend(false)})
        dispatch({type:'FOLLOW',payload:current_user?.id})
        location.reload()
        
        
        console.log(current_user)
        // dispatch(follow(user?.id))
        // setIsFriend(false)
      }
      // setIsFriend(!isFriend)

      
    } catch (error) {
      console.log(error)
    }
   
    
  }
  useEffect(()=>{
    setIsFriend(current_user?.following?.includes(user?._id))

  },[current_user,user?._id])

  useEffect(()=>{
    const fetchFrind=async()=>{
    try {
      const getFreind=await axios.get('http://localhost:8000/api/user/freinds/'+user?._id)
      setFriend(getFreind.data)
      console.log('getFreind===> ',getFreind)

      
    } catch (error) {
      
    }
  }
  fetchFrind()
  },[user?._id])


  const HomeRightbar=()=>{
    return(
      <>
      <div className="rightbarWrap">
        <div className='birthdays'>
          <img src="https://media.istockphoto.com/id/1092429810/vector/red-gift-box-vector-flat-icon-illustration-for-birthday-christmas-promotions-contests.jpg?s=612x612&w=0&k=20&c=38vOPZCMI58ZpWcIZpGjXWMAIAXGtBI1coBEJOXX4QE=" alt="" />
          <span>
            <b>Moiz Zakir</b> and <b>3 other freinds</b> have a birthday today
          </span>
        </div>
        <div className="ads">
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className="onlineFriends">
          <h4>Online Freinds</h4>
          <OnlineFreind/>
          <OnlineFreind/>
          <OnlineFreind/>
          <OnlineFreind/>
        </div>
      </div></>
    )
  }
  
  const ProfileRightbar=()=>{
    
    const navigate=useNavigate()
    return(<> 
    
    {current_user._id!==user._id && (<button style={{padding:'5px 10px' ,width:"120px",backgroundColor:'#0866ff',color:'white',border:'none' ,borderRadius:"8px"}} onClick={()=>followHandler() } > {isFriend?'unFollow':'Follow'}</button>)}
    <h4 style={{display:'flex', alignItems:'center'}} className='RightbarTitle'>UserInformation {user?._id==current_user?._id?<span style={{margin:'0px 10px'}}><BasicModal/>
    </span>:''}</h4>
    

<div className="rightbarinfo">
  
  
  <div className="rightbarinfoItems">
    <span>
      City:
    </span>
    <span>
      {user?.city || "notMentioned"}
    </span>
  </div>
  <div className="rightbarinfoItems">
    <span>
      From:
    </span>
    <span>
      {user?.from || 'notMentioned'}
    
    </span>
  </div>
  <div className="rightbarinfoItems">
    <span>
      RelationShip:
    </span>
    <span>
      Single
    </span>
  </div>
</div>
<h4 className='RightbarTitle'>UserFreinds</h4>
<div className="rightbarFollowings">
  
 { friend?.map((e)=>(
  
   <div className="rightbarFollowing" onClick={()=>{navigate(`/profile/${e.username}`); location.reload()}}>
  <img src={!e.profilePicture==''?e.profilePicture:"https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"} alt="" />
  <span>{e.username}</span>
</div>
     


 )

 )}

</div>


    </>)
  }
  return (
    <div className='rightbar'>
    {data? <ProfileRightbar/>
     : <HomeRightbar/>
    }

    </div>
  )
}
