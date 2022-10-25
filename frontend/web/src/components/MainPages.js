import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from './forgotPassword/ForgotPassword';
import Login from './login/Login';
import ResetPassword from './resetPassword/ResetPassword';

const MainPages = () => {

    return (
        <div className='main'> 
        <Routes>

        <Route path='/signin' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        </Routes>
  </div>
  )
}

export default MainPages
