import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../../pro-grama/pages/LandingPage'
import { Login } from '../pages'
import { MainRegister } from '../pages/MainRegister'


export const AuthRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <MainRegister/> } />
        {/* <Route path='landing' element={<LandingPage />} /> */}
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
    </>
  )
}
