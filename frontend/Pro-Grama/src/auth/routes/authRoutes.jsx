import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register, Register2, Register3 } from '../pages'


export const AuthRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={ <Login /> } />
        <Route path="register" element={ <Register/> } />
        <Route path="register2" element={ <Register2/> } />
        <Route path="register3" element={ <Register3/> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
    </>
  )
}
