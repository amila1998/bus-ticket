import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import BusTimeTable from './busTimeTable/BusTimeTable';
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
        
        <Route path='/busTimeTable' element={<BusTimeTable/>} />
        </Routes>
  </div>
  )
}

export default MainPages
