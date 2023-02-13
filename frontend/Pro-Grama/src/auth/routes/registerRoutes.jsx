import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Register2, Register } from '../pages'

export const RegisterRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="register" element={ <Register/> } />
        <Route path="register2" element={ <Register2 /> } />
        <Route path="register/*" element={ <Navigate to="/auth/register" /> } />
    </Routes>
    </>
  )
}