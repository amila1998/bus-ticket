import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';
import './busRoute.css'

function EditBusRoute() {
    const { busRouteId } = useParams();
    const [busRoute, setBusRoute] = useState();
    const navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState([]);
    const [buses, setBuses] = useState([]);
    const [buses2, setBuses2] = useState([]);
    const [oneStop, setOneStop] = useState('');
    const [setExBuses, setSetExBuses] = useState(true)
    const [stops, setStops] = useState([])
    const [callBack , setCallBack] = useState(false)
    console.log("🚀 ~ file: EditBusRoute.js ~ line 19 ~ EditBusRoute ~ stops", stops)

    let option = [];

    const exAllBuses = [];

    if (busRoute) {
        for (const bss of busRoute.buses) {
            exAllBuses.push(bss)
        }
    }

    useEffect(() => {
        if(callBack)
        {
    
        if (busRoute) {
            let exAllBusStops = [];
            
            for (const bssp of busRoute.stops) {
                exAllBusStops.push(bssp)
                console.log("🚀 ~ file: EditBusRoute.js ~ line 30 ~ EditBusRoute ~ exAllBusStops", exAllBusStops)
            }
            setStops(exAllBusStops);
        }
        setCallBack(false);
        
    }


    }, [busRoute , callBack])



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
        for (const sp of stops) {
            if (ss != sp) {
                ls.push(sp)
            }
        }
        setStops(ls)

    }

    let busesArray = [];
    const allBuses = [];

    for (const bs2 of buses2) {
        allBuses.push(bs2.busNumber)
    }

    useEffect(() => {
        const getAllBuses = async () => {

            try {
                const res = await axios.get("/api/getAllBus")
                setBuses2(res.data.AllBus)
                setSetExBuses(true)
            } catch (error) {
                console.log(error)
            }
        }
        getAllBuses()
    }, [])



    for (const b of allBuses) {
        busesArray.push({ value: b, label: b })
    }

    const handleChangeBuses = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    useEffect(() => {
        setBuses({ value: selectedValue })
    }, [selectedValue])


    const handleChange = (e) => {
        setBusRoute({ ...busRoute, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getABusRoute = async () => {
            try {
                const res = await axios.get(`/api/getABusRoute/${busRouteId}`)
                setBusRoute(res.data.fetch)
                setCallBack(true);
                //console.log(res)
            } catch (error) {
                alert(error.message)
            }
        }
        getABusRoute()
    }, [busRouteId])

    const editBusRouteHandler = async (e) => {
        e.preventDefault();
        // check fields
        // if (!routeNumber || !strtlocation || !desLocation)
        //     return toast("Please fill in all fields.", {
        //         className: "toast-failed",
        //         bodyClassName: "toast-failed",
        //     });

        try {
            const res = await axios.put(`/api/editBusRoute/${busRouteId}`, { "routeNumber": busRoute.routeNumber, "strtlocation": busRoute.strtlocation, "desLocation": busRoute.desLocation, "buses": selectedValue  , "stops" : stops});
            toast.success(res.data.msg, {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setSetExBuses(true)
            window.location.href = '/busRoute'
        } catch (error) {
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

    };

    const cancelBtn = () => {
        navigate('/busRoute')
    }


    useEffect(() => {
        if (setExBuses) {
            for (let index = 0; index < exAllBuses.length; index++) {
                option.push(exAllBuses[index])
            }
            setSelectedValue(option)
            setBuses({ value: option })
            setSetExBuses(false)
        }
    }, [exAllBuses, setExBuses])

    // useEffect(() => {
    //     for (let index = 0; index < exAllBusStops.length; index++) {
    //         option.push(exAllBusStops[index])
    //     }
    //     setStops(option)

    //     //setStops({ value: option })

    // }, [])

    console.log("🚀 ~ file: EditBusRoute.js ~ line 169 ~ useEffect ~ setStops", setStops)
    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="" style={{ width: "90%" }}>
                <div className=""><br />
                    <h2 className="brand-title"><center>Edit Bus Route</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Route Number</label></div>
                            <div class="col-8"><input className="inputs" type="text" name="routeNumber" required onChange={handleChange} placeholder='Enter Route Number' defaultValue={busRoute?.routeNumber} /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Buses</label></div>
                            <div class="col-8"><Select
                                isMulti
                                isClearable
                                name="buses"
                                options={busesArray}
                                value={busesArray.filter(obj => selectedValue.includes(obj.value))}
                                className="basic-multi-select inputs"
                                classNamePrefix="select"
                                onChange={handleChangeBuses}
                            /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Start Location</label></div>
                            <div class="col-8"><input className="inputs" type="city" name="strtlocation" required onChange={handleChange} placeholder='Enter Start Location' defaultValue={busRoute?.strtlocation} /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Destination Location</label></div>
                            <div class="col-8"><input className="inputs" type="city" name="desLocation" required onChange={handleChange} placeholder='Enter Destination Location' defaultValue={busRoute?.desLocation} /><br /><br /></div>
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
                                            return <div key={s} ><div className='busStopFlexInside'>{s}<span className='busStopSpan ms-3' onClick={() => delStops(s)}>X</span></div></div>
                                        })
                                    }
                                </div><br /><br /></div>
                        </div>
                    </div>
                    <div>
                        <br />
                        <center>
                            <button className="deleteBtn me-5" type="submit" onClick={cancelBtn} >Cancel</button>
                            <button className="editBtn ms-5" type="submit" onClick={editBusRouteHandler} style={{ width: "130px" }}>Save </button>
                        </center>
                        <br />
                    </div>
                </div>
            </form>

        </div>
    )
}

export default EditBusRoute