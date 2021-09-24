import { postsConstants } from "../constants";


const initialState = {
  posts:[],
  users:[],
}

export default (state=initialState,action)=>{
  // console.log(action)
  switch(action.type){
    case postsConstants.GET_ALL_SUCCESS : 
      state = {
        ...state,
        posts:action.payload.posts,
      }
      break;
    case postsConstants.GET_ALL_FAILURE : 
      state = {
        ...state,
      }
      break;
    case postsConstants.GET_ALL_USERS_SUCCESS:
      state={
        ...state,
        users:action.payload.users,
      }
      break;
  }
  return state;
}