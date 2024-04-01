import { createContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer";
import axios from "axios";

const finder=async()=>{
    const dat=await axios.get(`http://localhost:8000/api/user?userId=${localStorage.getItem('token')}`)

   
    // console.log(dat)
    return(dat)

    
}
const data=localStorage.getItem('token') && await finder()
console.log(data?.data)

const INITIAL_STATE={
    user: localStorage.getItem('token')?data?.data: null,
    isFetching:false,
    error:false,
}
 export const AuthContext=createContext(INITIAL_STATE)

 export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);

return(
    <AuthContext.Provider
    value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
    }}

    
    >
        {children}



    </AuthContext.Provider>
)

}