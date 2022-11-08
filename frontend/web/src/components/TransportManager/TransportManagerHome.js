import React from 'react'
import logo from '../../assets/mainLogo.png'
import { useNavigate } from 'react-router-dom'

const TransportManagerHome = () => {
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

    const handleBusTimeTableManagement = () => {
        navigate('/busTimeTable');
    }
    const handleBusManagement = () => {
        navigate('/AllBusView');
    }

    return (
        <div className='adminDashboard'>
            <div className='title'>
                Transport Manager Dashboard
                <hr />
            </div>
            <div className='adminMain'>
                <div>
                    <br />

                    <button onClick={handleUserManagement} className='btn btn-outline-primary'>User Management</button><br />
                    <button onClick={handleTokenmanagement} className='btn btn-outline-primary'>Token Management</button><br />
                    <button onClick={handleBusRouteManagement} className='btn btn-outline-primary'>Bus Route Management</button><br />
                    <button onClick={handleBusTimeTableManagement} className='btn btn-outline-primary'>Bus Time Table Management</button><br />
                    <button onClick={handleBusManagement} className='btn btn-outline-primary'>Bus Management</button><br />
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default TransportManagerHome