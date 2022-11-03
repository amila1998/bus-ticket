import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    TimeTableID: "",
    StartLocation: "",
    DestinationLocation: "",
    StartingTime: "",
    EndTime: "",
    BusRegistrationNo: ""
};

function AddBusTimeTable() {
    const [data, setData] = useState(initialState);
    const { TimeTableID, StartLocation, DestinationLocation, StartingTime, EndTime, BusRegistrationNo } = data;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const addBusTimeTableHandler = async (e) => {
        e.preventDefault();
        // check fields
        if (!TimeTableID || !StartLocation || !DestinationLocation || !StartingTime || !EndTime || !BusRegistrationNo) {
            return toast("Please fill in all fields.", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });
        } else {
            try {
                const res = await axios.post("/api/timetable/add", { TimeTableID, StartLocation, DestinationLocation, StartingTime, EndTime, BusRegistrationNo });
                toast.success(res.data.msg, {

                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.href = '/busTimeTable'
            } catch (error) {
                //alert(error.response.data);
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log(error);
            }
        }
    };

    const cancelBtn = () => {
        navigate('/busTimeTable')
    }

    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Add New Bus Time Table</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">TimeTable ID</label></div>
                            <div class="col-6"><input className="inputs" type="text" name="TimeTableID" required onChange={handleChange} placeholder='Enter Time Table ID' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Start Location</label></div>
                            <div class="col-6"><input className="inputs" type="city" name="StartLocation" required onChange={handleChange} placeholder='Enter Start Location' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Destination Location</label></div>
                            <div class="col-6"><input className="inputs" type="city" name="DestinationLocation" required onChange={handleChange} placeholder='Enter Destination Location' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Starting Time</label></div>
                            <div class="col-6"><input
                                className="inputs"
                                type="time"
                                name="StartingTime"
                                onChange={handleChange}
                            /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">End Time</label></div>
                            <div class="col-6"><input
                                className="inputs"
                                type="time"
                                name="EndTime"
                                onChange={handleChange}
                            /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Bus Registration Number</label></div>
                            <div class="col-6"><input className="inputs" type="text" name="BusRegistrationNo" required onChange={handleChange} placeholder='Enter Bus Registration Number' /><br /><br /></div>
                        </div>

                    </div>
                    <div>
                        <br />
                        <center>
                            <button className="deleteBtn me-5" type="submit" onClick={cancelBtn} >Cancel</button>
                            <button className="editBtn ms-5" type="submit" onClick={addBusTimeTableHandler} style={{ width: "130px" }}>Add </button>
                        </center>
                        <br />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddBusTimeTable