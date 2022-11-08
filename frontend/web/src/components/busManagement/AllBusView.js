import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusDeleteModal from './BusDeleteModal';



function AllBusView() {


    const [allBus, setAllBus] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteID, setDeleteID] = useState("");
    console.log("🚀 ~ file: AllBusView.js ~ line 12 ~ AllBusView ~ deleteID", deleteID)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
    setOpen(false);
    };
    const handleCancel = () => {
        handleClose();
      };

    useEffect(() => {

        const getAllBus = async () => {
            await axios.get(`/api/getAllBus`).then((res) => {
                console.log("🚀 ~ file: PharmacistHome.js ~ line 101 ~ awaitaxios.get ~ res", res);
                setAllBus(res.data.AllBus);
            }).catch((err) => {
                console.log(err.massage);
            })
        }
        getAllBus();
    }, [open])
    const filteredCountries = allBus.filter(allBus => {
        return (allBus.chassieNo.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            allBus.type.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            allBus.condition.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            allBus.busNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })
    const addBusDetailsHandler = () => {
       
        navigate('/AddBus')
    }
    const deleteBusRoute = async (id) => {
        console.log("🚀 ~ file: AllBusView.js ~ line 49 ~ deleteBusRoute ~ id", id)
        
        try {
          const res = await axios.delete(`/api/deleteBus/${id}`);
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
        // setCallback(true);
      };

      const editBus= (id) => {
        navigate(`/editBus/${id}`);
      };

    return (
        <div>
            <div>
            <ToastContainer/>
            <div>
                <input class="" type="search" placeholder="Search" aria-label="Search" style={{ "border-radius":"10px","height":"40px"}}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>
            <br />
            <div><button className='btnPink me-5' onClick={addBusDetailsHandler}>Add new bus</button></div>
            <br />
            <table class='table' id="bus-time-table">
                <tr>
                    <th>Bus ID</th>
                    <th>Chassis No</th>
                    <th>No of Seat</th>
                    <th>Type</th>
                    <th>Condition</th>
                    <th>Bus Number</th>
                    <th> </th>

                </tr>


                {
                    filteredCountries.map((Bus, index) => (
                        <tr >
                            <td>{Bus._id}</td>
                            <td>{Bus.chassieNo}</td>
                            <td>{Bus.noOfSeat}</td>
                            <td>{Bus.type}</td>
                            <td>{Bus.condition}</td>
                            <td>{Bus.busNumber}</td>
                            <td> 
                            <div className=''>
                                <button className='btn  btn-warning' style={{ "border-radius":"10px","height":"40px", "margin":"10px","width":"70px"}}
                                onClick={() => editBus(Bus._id)}
                                >Edit</button>

                                <button className='btn btn-danger'style={{ "border-radius":"10px","height":"40px"}}
                                onClick={() => {
                                    handleOpen();
                                    setDeleteID(Bus._id);
                                  }}
                                  >Delete</button>
                            </div>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
        <BusDeleteModal
          id={deleteID}
          open={open}
          handleClose={handleClose}
          handleCancel={handleCancel}
          close={close}
          deleteBusRoute={deleteBusRoute}
        
        />
    </div>
        
    )
}

export default AllBusView