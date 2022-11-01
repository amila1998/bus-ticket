import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './busRoute.css'
const initialState = {
    routeNumber: "",
    strtlocation: "",
    desLocation: ""
};

function AddBusRoute() {
    const [data, setData] = useState(initialState);
    const { routeNumber, strtlocation, desLocation } = data;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addBusRouteHandler = async (e) => {
        e.preventDefault();
        // check fields
        if (!routeNumber || !strtlocation || !desLocation)
            return toast("Please fill in all fields.", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });

    };

    const cancelBtn = () => {
        navigate('/busRoute')
    }

    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Add New Bus Route</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Route Number</label></div>
                            <div class="col-6"><input className="inputs" type="text" name="routeNumber" required onChange={handleChange} placeholder='Enter Route Number' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Start Location</label></div>
                            <div class="col-6"><input className="inputs" type="city" name="strtlocation" required onChange={handleChange} placeholder='Enter Start Location' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Destination Location</label></div>
                            <div class="col-6"><input className="inputs" type="city" name="desLocation" required onChange={handleChange} placeholder='Enter Destination Location' /><br /><br /></div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <center>
                            <button className="deleteBtn me-5" type="submit" onClick={cancelBtn} >Cancel</button>
                            <button className="editBtn ms-5" type="submit" onClick={addBusRouteHandler} style={{width:"130px"}}>Add </button>
                        </center>
                        <br />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddBusRoute