import axios from 'axios';
const api = 'http://localhost:8000'
const publicUrl = (file)=>{
  return `${api}/public/${file}`
}
const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL : api,
  headers:{
    'Authorization': token?`Bearer ${token}`:'',
  }
});
export default axiosInstance;