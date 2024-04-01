export const loginStart=(userCredientials)=>({
    type:"LOGIN_START"

})
export const loginSucess=(user)=>({
    type:"LOGIN_SUCESS",
    payload:user,
    
})
export const loginFailure=(error)=>({
    type:"LOGIN_FAILURE",
    payload:error

})
export const follow=(error)=>({
    type:"FOLLOW",
    payload:error

})
export const unFollow=(error)=>({
    type:"UNFOLLOE",
    payload:error

})