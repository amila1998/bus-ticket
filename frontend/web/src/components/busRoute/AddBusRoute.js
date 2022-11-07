import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './busRoute.css'
import Select from 'react-select';
const initialState = {
    routeNumber: "",
    strtlocation: "",
    desLocation: ""
};

function AddBusRoute() {
    const [data, setData] = useState(initialState);
    const { routeNumber, strtlocation, desLocation } = data;
    const [buses, setBuses] = useState([]);
    const [buses2, setBuses2] = useState([]);
    const navigate = useNavigate();
    const [oneStop, setOneStop] = useState('');
    const [stops, setStops] = useState([])

    let busesArray = [];
    const allBuses = [];

    for (const bs2 of buses2) {
        allBuses.push(bs2.busNumber)
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getAllBuses = async () => {

            try {
                const res = await axios.get("/api/getAllBus")
                setBuses2(res.data.AllBus)
            } catch (error) {
                console.log(error)
            }
        }
        getAllBuses()
    }, [])

    for (const b of allBuses) {
        busesArray.push({ value: b, label: b })
    }

    const handleBusesChange = (selectedOption) => {
        let option = [];
        selectedOption.map((b) => {
            option.push(b.value)
        })
        setBuses(option)
    }

    const addBusRouteHandler = async (e) => {
        e.preventDefault();
        // check fields
        if (!routeNumber || !strtlocation || !desLocation) {
            return toast("Please fill in all fields.", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });
        } else {
            try {
                const res = await axios.post("/api/addBusRoute", { routeNumber, strtlocation, desLocation , buses , stops });
                toast.success(res.data.msg, {

                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.href = '/busRoute'
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
        navigate('/busRoute')
    }

    const onChangeStops = (e) => {
        setOneStop(e.target.value)
    }

    const hndleAddStops = () => {
        let s = stops
        s.push(oneStop)
        setOneStop('')
        setStops(s)
    }

const delStops = (ss) => {
    let ls = []
    for(const sp of stops){
        if(ss!=sp){
            ls.push(sp)
        }
    }
    setStops(ls)

}

    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="" style={{ width: "90%" }}>
                <div className=""><br />
                    <h2 className="brand-title"><center>Add New Bus Route</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Route Number</label></div>
                            <div class="col-8"><input
                                className="inputs"
                                type="text"
                                name="routeNumber"
                                onChange={handleChange}
                                placeholder='Enter Route Number'
                            /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Buses</label></div>
                            <div class="col-8"><Select
                                isMulti
                                name="buses"
                                options={busesArray}
                                className="basic-multi-select inputs"
                                classNamePrefix="select"
                                onChange={handleBusesChange}
                            /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Start Location</label></div>
                            <div class="col-8"><input
                                className="inputs"
                                type="city"
                                name="strtlocation"
                                onChange={handleChange}
                                placeholder='Enter Start Location'
                            /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Destination Location</label></div>
                            <div class="col-8"><input
                                className="inputs"
                                type="city"
                                name="desLocation"
                                onChange={handleChange}
                                placeholder='Enter Destination Location'
                            /><br /><br /></div>
                        </div>

                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Bus Stops</label></div>
                            <div class="col-7"><input
                                type="text"
                                placeholder='Enter New bus stop'
                                value={oneStop}
                                onChange={onChangeStops}
                                className="inputs"
                            />

                                <br /><br />
                            </div>
                            <div class="col-1"><div className='btn btn-outline-warning mt-1 ms-3' onClick={hndleAddStops}>Add</div></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"></div>
                            <div class="col-8">
                            <div className='busStopFlex'>
                                {
                                    stops.map(s => {
                                        return <div key={s} ><div className='busStopFlexInside'>{s}<span className='busStopSpan ms-3' onClick={()=>delStops(s)}>X</span></div></div>
                                    })
                                }
                            </div><br /><br /></div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <center>
                            <button className="deleteBtn me-5" type="submit" onClick={cancelBtn} >Cancel</button>
                            <button className="editBtn ms-5" type="submit" onClick={addBusRouteHandler} style={{ width: "130px" }}>Add </button>
                        </center>
                        <br />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddBusRoute