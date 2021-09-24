import { authConstants,postsConstants } from "../constants"
import axios from '../../axiox'

export const getAllPosts = ()=>{
  return async (dispatch)=>{
    const res = await axios.get('/allpost')
    console.log(res,"these are all posts");
    if(res.status == 200){
      dispatch({
        type:postsConstants.GET_ALL_SUCCESS,
        payload:{
          posts:res.data.posts,
        }
      })
    }else{
      console.log(res);
      dispatch({
        type:postsConstants.GET_ALL_FAILURE,
        payload:{
          error:res.data
        }
      })
    }
  }
}
export const getAllUsers = ()=>{
  return async (dispatch)=>{
    const res = await axios.get('/allusers')
    console.log(res,"------------------USERS");
    if(res.status == 200){
      dispatch({
        type:postsConstants.GET_ALL_USERS_SUCCESS,
        payload:{
          users:res.data.data,
        }
      })
    }
    else{
      console.log(res);
      dispatch({
        type:authConstants.GET_ALL_USERS_FAILURE,
      })
    }
  }
}
export const approvePost = (id)=>{
  return async (dispatch)=>{
    const res = await axios.put(`/approvePost/${id}`)
    console.log(res,"these are all posts");
  }
}
export const notapprovePost = (id)=>{
  return async (dispatch)=>{
    const res = await axios.put(`/notapprovePost/${id}`)
    console.log(res,"these are all posts");
  }
}
export const deletePost = (id)=>{
  return async (dispatch)=>{
    const res = await axios.delete(`/deletepost/${id}`)
    console.log(res,"these are all posts");
  }
}
export const deleteUser = (id)=>{
  return async (dispatch)=>{
    const res = await axios.delete(`/deleteuser/${id}`)
    // console.log(res,"these are all posts");
  }
}

