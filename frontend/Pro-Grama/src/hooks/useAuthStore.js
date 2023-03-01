import axios from 'axios'
import { useDispatch } from 'react-redux'
import { onlogout, setProfile, setToken, setUser } from '../store/auth/authSlice';
export const useAuthStore = () => {
  const dispatch = useDispatch();
 
   const startLogin = async({email,password})=>{
      try {
        const{data}= await axios.post('https://pro-grama-production.up.railway.app/auth/authenticate',{email,password})
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', data.name);
        dispatch(setToken(data.token))
        dispatch(setUser(localStorage.getItem('user')))
      } catch (error) {
        console.log(error)
        dispatch(onlogout());
      }
   }

    const startRegister  = async({email,name,lastname,password})=>{
        try {
           const{data}=await axios.post('https://pro-grama-production.up.railway.app/auth/register',{email,name,lastname,password})
           localStorage.setItem('token', data.token);
           localStorage.setItem('user', data.name)
            dispatch(setToken(data.token))
            dispatch(setUser(data.name))
            console.log(data)
          console.log({email,password,name,lastname})
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
    

    const startUpdatingProfile= async({name,lastname,email,password})=>{
      const token = localStorage.getItem('token')
      try{
          const {data} = await axios.put('https://pro-grama-production.up.railway.app/user/update',{name,lastname,email,password} ,{headers:{
            Authorization: `Bearer ${token}`
          }});
          dispatch(setProfile(data))
          console.log(data);
      }catch(error){
        console.log(error)
      }
    }





    return{
        startLogin,
         startRegister,
         startUpdatingProfile,
         startLogout,
         checkAuthToken,
         
    }
}
