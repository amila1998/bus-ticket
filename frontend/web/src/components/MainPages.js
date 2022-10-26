import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import ForgotPassword from './forgotPassword/ForgotPassword';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import ResetPassword from './resetPassword/ResetPassword';
import TicketBooking from './ticketBooking/TicketBooking';

const MainPages = () => {

    return (
        <div> 
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/ticketBooking' element={<TicketBooking/>} />
        </Routes>
  </div>
  )
}

export default MainPages
