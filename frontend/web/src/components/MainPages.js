import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from './login/Login';

const MainPages = () => {

    return (
        <div> 
        <Routes>

        <Route path='/signin' element={<Login />} />
        </Routes>
  </div>
  )
}

export default MainPages
