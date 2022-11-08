import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import close from "../../assets/close.png";

import './busRoute.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: "10px",
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderColor: 'red',
};

function BusRoute() {
    const navigate = useNavigate();
    const [busRoutes, setBusRoutes] = useState([]);
    const [callback, setCallback] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [deleteID, setDeleteID] = useState("");
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        if (callback) {
            const getAllBusRoutes = async () => {
                try {
                    const res = await axios.get("/api/getAllBusRoutes");
                    setBusRoutes(res.data.fetch);
                    setCallback(false)
                } catch (error) {
                    console.log(error)
                }
            };
            getAllBusRoutes();
        }
    }, [callback]);

    const deleteBusRoute = async (busRouteId) => {
        try {
            const res = await axios.delete(`/api/deleteBusRoute/${busRouteId}`);
            toast.success(res.data.msg, {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            handleClose();
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
        }
        setCallback(true)
    }

    const addNewBusRoute = () => {
        navigate('/addBusRoute');
    }

    const editBusRoute = (busRouteId) => {
        navigate(`/editBusRoute/${busRouteId}`);
    }

    const handleCancel = () => {
        handleClose()
    }

    return (
        <div className='busRouteMainLayout'>
            <ToastContainer />
            <br />
            <center><h2>Manage Bus Route</h2></center><br />

            <button className='btnPink ms-3 mb-3' style={{ width: "250px" }} onClick={() => addNewBusRoute()}>Add New Bus Route</button><br /><br />

            <div>
                <table id="customers" className='fs-5 m-auto'>
                    <thead>
                        <tr className='fw-bold ms-3'>
                            <th >Route Number</th>
                            <th >Buses</th>
                            <th >Start Location</th>
                            <th >Destination Location</th>
                            <th >Bus Stops</th>
                            <th >Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {busRoutes.map(busRoute => (
                            <tr key={busRoute._id}>
                                <td>{busRoute.routeNumber}</td>
                                <td>{
                                    busRoute.buses.map(b => {
                                        return <div key={b} lable={b}>{b} </div>
                                    })
                                }
                                </td>
                                <td>{busRoute.strtlocation}</td>
                                <td>{busRoute.desLocation}</td>
                                <td>{
                                    busRoute.stops.map(b => {
                                        return <div key={b} lable={b}>{b} </div>
                                    })
                                }
                                </td>
                                <td><center><button className='editBtn' onClick={() => editBusRoute(busRoute._id)}>Edit</button>
                                    <button className='deleteBtn' onClick={() => {
                                        handleOpen();
                                        setDeleteID(busRoute._id);
                                    }} >Delete</button></center>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-sm-11 ">
                                                        <h2 className='popupTittle' style={{ fontWeight: "bold", fontSize: "22px", color: "red" }}>Delete Bus Route</h2>
                                                    </div>
                                                    <div class="col-sm-1 ">
                                                        <img src={close} style={{ width: "21px", height: "24px", cursor: "pointer" }} onClick={handleCancel} alt="close" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="ms-2" style={{ fontWeight: "400", fontSize: "20px" }}>Are you want to delete this Bus Route ?</div> <br /><br />
                                            <div>
                                                <div>
                                                    <center>
                                                        <button className='editBtn me-4' onClick={handleCancel}>Cancel</button>
                                                        
                                                        <button className='deleteBtn ms-4' onClick={() => deleteBusRoute(deleteID)}>Delete</button>
                                                    </center>

                                                </div>
                                            </div><br />

                                        </Box>
                                    </Modal>
                                </td>

                            </tr>))}
                    </tbody>

                </table><br /><br />

            </div>

        </div>
    )
}

export default BusRoute