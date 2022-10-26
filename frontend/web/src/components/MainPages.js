import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from './forgotPassword/ForgotPassword';
import Login from './login/Login';
import Register from './register/Register';
import ResetPassword from './resetPassword/ResetPassword';

const MainPages = () => {

    return (
        <div> 
        <Routes>

        <Route path='/signin' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        <Route path='/signup' element={<Register/>} />
        </Routes>
  </div>
  )
}

export default MainPages
