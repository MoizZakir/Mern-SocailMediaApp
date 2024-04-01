import axios from "axios"

export const loginCalls= async(userCreientials,dispatch)=>{
    dispatch({type:'LOGIN_START'})
    try {
        const res=await axios.post('http://localhost:8000/api/auth/login',userCreientials);
        // localStorage.setItem(JSON.stringify(res?.data.data))
        dispatch({type:"LOGIN_SUCESS",payload:res.data.data})
      
        
        
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE",payload:error })
        
    }

}