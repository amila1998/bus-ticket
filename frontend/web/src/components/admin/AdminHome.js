import React from 'react'
import logo from '../../assets/mainLogo.png'
import { useNavigate } from 'react-router-dom'
import './adminhome.css'
const AdminHome = () => {
  const navigate = useNavigate()

  const handleUserManagement = () => {
    navigate('/userManagement');
  }

  const handleTokenmanagement = () => {
    navigate('/tokenmanagement');
  }

  const handleBusRouteManagement = () => {
    navigate('/busRoute');
  }

  return (
    <div className='adminDashboard'>
      <div className='title'>
        Admin Dashboard
        <hr />
      </div>
      <div className='adminMain'>
        <div>
          <br />

          <button onClick={handleUserManagement} className='btn btn-outline-primary'>User Management</button><br />
          <button onClick={handleTokenmanagement} className='btn btn-outline-primary'>Token Management</button><br />
          <button onClick={handleBusRouteManagement} className='btn btn-outline-primary'>Bus Route Management</button><br />

          <br />
        </div>
      </div>
    </div>
  )
}

export default AdminHome