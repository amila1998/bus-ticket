import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


function AllBusView() {


    const [allBus, setAllBus] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

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
    }, [])
    const filteredCountries = allBus.filter(allBus => {
        return (allBus.chassieNo.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            allBus.type.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            allBus.condition.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            allBus.busNumber.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    })
    const addBusDetailsHandler = () => {
       
        navigate('/AddBus')
    }



    return (
        <div>
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
                                <button className='btn  btn-warning' style={{ "border-radius":"10px","height":"40px", "margin":"10px","width":"70px"}}>Edit</button>

                                <button className='btn btn-danger'style={{ "border-radius":"10px","height":"40px"}}>Delete</button>
                            </div>
                            </td>
                        </tr>
                    ))
                }




            </table>
        </div>
    )
}

export default AllBusView