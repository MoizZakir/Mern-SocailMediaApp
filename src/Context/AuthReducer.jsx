export const AuthReducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user:null,
                isFetching:true,
                error:false
            }
        case "LOGIN_SUCESS":
            return{
                user:action.payload,
                isFetching:false,
                error:false
            }
        case "LOGIN_FAILURE":
            return{
                user:null,
                isFetching:false,
                error:action.payload
            }
        case "FOLLOW":
            return{
               ...state,
               user:{
                ...state.user,
                following:[...state.user.following ,action.payload]
               }
            }
        case "UNFOLLOW":
            return{
               ...state,
               user:{
                ...state.user,
                following:state.user.following.filter((e)=>e !==action.payload)
               }
            }
            default:
                return state
    }
}