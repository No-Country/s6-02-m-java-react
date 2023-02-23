import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../pages'
import { MainRegister } from '../pages/MainRegister'


export const AuthRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <MainRegister/> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
    </>
  )
}
