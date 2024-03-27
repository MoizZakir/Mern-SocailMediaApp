import axios from "axios"

export const loginCalls= async(userCreientials,dispatch)=>{
    dispatch({type:'LOGIN_START'})
    try {
        const res=await axios.post('http://localhost:8000/api/auth/login',userCreientials);
        dispatch({type:"LOGIN_SUCESS",payload:res.data.data})
        console.log(res.data.data)
        
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE",payload:error })
        
    }

}