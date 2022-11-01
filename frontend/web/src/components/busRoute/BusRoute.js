import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
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
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    const addNewBusRoute = () => {
        navigate('/addBusRoute');
    }

    const editBusRoute = () => {
        navigate('/editBusRoute');
    }

    const handleCancel = () => {
        handleClose()
    }


    return (
        <div className='busRouteMainLayout'>
            <br />
            <center><h2>Manage Bus Route</h2></center><br />

            <button className='btnPink ms-3 mb-3' style={{ width: "250px" }} onClick={() => addNewBusRoute()}>Add New Bus Route</button><br /><br />

            <div>
                <table id="customers" className='fs-5 m-auto'>

                    <tr className='fw-bold ms-3'>
                        <th style={{ width: "300px" }}>Route Number</th>
                        <th style={{ width: "400px" }}>Start Location</th>
                        <th style={{ width: "400px" }}>Destination Location</th>
                        <th style={{ width: "450px" }}>Action</th>
                    </tr>
                    <tr>
                        <td>99</td>
                        <td>Colombo Fort</td>
                        <td>Badulla</td>
                        <td><center><button className='editBtn' >Edit</button>
                            <button className='deleteBtn' >Delete</button></center></td>
                    </tr>
                    <tr>
                        <td >57</td>
                        <td>Colombo Fort</td>
                        <td>Anuradhapura</td>
                        <td><center><button className='editBtn' >Edit</button>
                            <button className='deleteBtn' >Delete</button></center></td>
                    </tr>
                    <tr>
                        <td >17</td>
                        <td>Kandy</td>
                        <td>Pandura</td>
                        <td><center><button className='editBtn' onClick={() =>editBusRoute()}>Edit</button>
                            <button className='deleteBtn' onClick={handleOpen} >Delete</button></center>
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
                                                <button className='editBtn' onClick={handleCancel}>Cancel</button>
                                                <button className='deleteBtn' >Delete</button>
                                            </center>

                                        </div>
                                    </div><br />

                                </Box>
                            </Modal>
                        </td>
                    </tr>
                </table><br /><br />

            </div>

        </div>
    )
}

export default BusRoute