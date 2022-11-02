import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import AddBusRoute from './busRoute/AddBusRoute';
import BusRoute from './busRoute/BusRoute';
import EditBusRoute from './busRoute/EditBusRoute';
import BusTimeTable from './busTimeTable/BusTimeTable';
import { GlobalState } from '../GlobalState';
import AdminHome from './admin/AdminHome';
import ForgotPassword from './forgotPassword/ForgotPassword';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import ResetPassword from './resetPassword/ResetPassword';
import TicketBooking from './ticketBooking/TicketBooking';
import GenarateToken from './tokenManagement/genarateToken/GenarateToken';
import TokenManagement from './tokenManagement/TokenManagement';
import AddNewUser from './user_management/add_New_User/AddNewUser';
import UserManagement from './user_management/UserManagement';
import AllBusView from './busManagement/AllBusView';
import AddBus from './busManagement/AddBus';

const MainPages = () => {
  const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [istransport_manager] = state.userAPI.istransport_manager

    return (
        <div className='main'> 
        <Routes>
        <Route path='/' element={isAdmin?<AdminHome/>:<Home/>} />
        <Route path='/signin' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        
        <Route path='/busTimeTable' element={<BusTimeTable/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/ticketBooking' element={<TicketBooking/>} />
        <Route path='/busRoute' element={isLogged? <BusRoute/> : <Login />}/>
        <Route path='/addBusRoute' element={isLogged?<AddBusRoute/> : <Login />}/>
        <Route path='/editBusRoute/:busRouteId' element={isLogged?<EditBusRoute/> : <Login />}/>
        

        <Route path='/userManagement' element={isAdmin?<UserManagement/>:istransport_manager&&<UserManagement/>} />
        <Route path='/addNewUser' element={isAdmin?<AddNewUser/>:istransport_manager&&<AddNewUser/>} />

        <Route path='/tokenManagement' element={<TokenManagement/>}/>
        <Route path='/genarateToken' element={<GenarateToken/>}/>
        
        <Route path='/AllBusView' element={<AllBusView/>}/>
        <Route path='/AddBus' element={<AddBus/>}/>

        </Routes>
  </div>
  )
}

export default MainPages
