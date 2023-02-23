import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/authRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { MainRoute } from "../pro-grama/routes/mainRoute";

export const AppRouter = () => {
  const{checkAuthToken}=useAuthStore()
  const{status}=useSelector(state=>state.auth)

  useEffect(()=>{
      checkAuthToken();
  },[])
   if(status === 'checking'){
    return(
      <h3>Loading.....</h3>
    )
   }

  return (
    <Routes>
      {
        status === "authorized"
        ?<Route path="/*" element={<MainRoute />} />
        : <Route path="/auth/*" element={<AuthRoutes />} />
      }
      <Route path="/*" element={<Navigate to='/auth/login' />} />
     
    </Routes>
  );
};
