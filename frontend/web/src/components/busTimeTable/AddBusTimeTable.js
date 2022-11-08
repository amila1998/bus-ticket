import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';

const initialState = {
    TimeTableID: "",
    Navigation : null ,
    StartingTime: "",
    EndTime: "",
};

function AddBusTimeTable() {
    const [data, setData] = useState(initialState);
    const [routeNo, setRouteNo] = useState([]);
    const [routeNo2, setRouteNo2] = useState([]);
    const { TimeTableID , Navigation ,  StartingTime, EndTime } = data;
    const navigate = useNavigate();
    const [routeBuses, setRouteBuses] = useState([])
    const [busID, setBusID] = useState({})
    let routeNoArray = [];
    const allRouteNos = [];

    for (const rn2 of routeNo2) {
        allRouteNos.push(rn2.routeNumber);
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getAllBusRoutes = async () => {
            try {
                const res = await axios.get("/api/getAllBusRoutes");
                setRouteNo2(res.data.fetch);
            } catch (error) {
                console.log(error)
            }
        };
        getAllBusRoutes();
    }, []);


    for (const r of allRouteNos) {
        routeNoArray.push({ value: r, label: r })
    }

    const handleRouteNoChange = (selectedOption) => {
        console.log(selectedOption);
        setRouteNo(selectedOption.value)
        if (selectedOption.value != '') {
            let arr = []
            for (const r of routeNo2) {
                if (selectedOption.value === r.routeNumber) {
                    for (const b of r.buses) {
                        arr.push({ value: b, label: b })
                    }
                }
            }
            setRouteBuses(arr)
        }
    }

    const addBusTimeTableHandler = async (e) => {
        e.preventDefault();
        // check fields
        if (!TimeTableID || !routeNo || !Navigation || !StartingTime || !EndTime || !busID) {
            return toast("Please fill in all fields.", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });
        } else {
            try {
                const res = await axios.post("/api/timetable/add", { TimeTableID, routeNo, Navigation, StartingTime, EndTime, busID: busID.value });
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
                            <div class="col-4"><label className="label">Bus Route Number</label></div>
                            <div class="col-6"><Select
                                name="routeNo"
                                options={routeNoArray}
                                className="basic-multi-select inputs"
                                classNamePrefix="select"
                                onChange={handleRouteNoChange}
                            /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-4"><label className="label">Navigation</label></div>
                            <div class="col-6"><div className='row' onChange={handleChange}>
                                <div className='col-5'><input className="radioButton ms-3 me-3" type="radio" name="Navigation" required value={true} /><label className="label" >Up</label></div>
                                <div className='col-4'><input className="radioButton ms-3 me-3" type="radio" name="Navigation" required value={false}/><label className="label" >Down</label></div>
                            </div><br /></div>
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
                            <div class="col-6">
                                <Select
                                    className='inputs'
                                    onChange={setBusID}
                                    options={routeBuses}
                                    placeholder={'Select a Bus'}
                                />


                                <br /><br /></div>
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