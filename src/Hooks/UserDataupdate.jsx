import axios from "axios"
import { useNavigate } from "react-router"

const useUpdateUser=async(userdata,id,nav,close)=>{
    

    try {
        
        const user=await axios.get(`http://localhost:8000/api/user?username=${userdata?.username}`)
        if(user?.data?.status) {
            return alert('username Already Exist .Try another name')}

        const userApi=await axios.put(`http://localhost:8000/api/user/${id}`,{...userdata,_id:id})
        if(userApi?.data?.status){
            console.log(userApi?.data?.username)
            close()
            return  nav(`/profile/${userApi?.data?.username}`)
        }



    } catch (error) {
        alert(error)
        
    }


}
export {useUpdateUser}