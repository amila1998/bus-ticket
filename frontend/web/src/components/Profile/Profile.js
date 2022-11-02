import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { GlobalState } from '../../GlobalState';

const Profile = () => {
    const gState = useContext(GlobalState)
    const [token] = gState.token
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
        const res = await axios.post('/api/auth/logout', {
            headers: { Authorization: token }
        })
        toast.success(res.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        window.sessionStorage.clear();
        localStorage.clear();
        window.location.href = "/";
    } catch (err) {
        toast.error(err.response.data.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}


  return (
    <div className='adminDashboard'>
      <div className='title'>
      Profile
        <hr/>
      </div>
      <div className='adminMain'>
        <div>
        <br/>
        
          <button onClick={handleLogout} className='btn btn-outline-danger'>Logout</button><br/>
        </div>
      </div>
    </div>
  )
}

export default Profile


