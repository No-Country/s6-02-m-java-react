import axios from 'axios'
import { useDispatch } from 'react-redux'
import { onlogout, setToken } from '../store/auth/authSlice';
export const useAuthStore = () => {
  const dispatch = useDispatch();
 
   const startLogin = async({email,password})=>{
      try {
        const{data}= await axios.post('https://pro-grama-production.up.railway.app/auth/authenticate',{email,password})
        localStorage.setItem('token', data.token);
        dispatch(setToken(data.token))
      } catch (error) {
        console.log(error)
        dispatch(onlogout());
      }
   }

    const startRegister  = async({email,name,lastName,password})=>{
        try {
           const{data}=await axios.post('https://pro-grama-production.up.railway.app/auth/register',{email,name,lastName,password})
           localStorage.setItem('token', data.token);
            dispatch(setToken(data.token))
            console.log(data)
        } catch (error) {
            console.log(error)
            dispatch(onlogout());
        }
    }
    


    const checkAuthToken = ()=>{
       const token = localStorage.getItem('token');
       if(!token) return dispatch(onlogout())

       return dispatch(setToken(token))
    }


    const startLogout = ()=>{
      localStorage.clear();
      dispatch(onlogout())
    }






    return{
        startLogin,
         startRegister,
         startLogout,
         checkAuthToken
    }
}
