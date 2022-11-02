import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import close from "../../assets/close.png";
import "./busTimeTable.css"
import axios from 'axios'

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

const BusTimeTable = () => {
    const navigate = useNavigate();
    const [timeTables, setTimeTables] = useState([]);

    const getTimeTables = async () => {
            try {
                const res = await axios.get("/api/timetable/")
                console.log(res)
                setTimeTables(res.data.AllTimetables)
            } catch (error) {
                console.log(error)
            }
    }

    React.useEffect(() => {
        getTimeTables()
    }, [])

    const addNewBusTimetable = () => {
        navigate('/addBusTimeTable');
    }

    const editBusTimetable = (id) => {
        navigate(`/editBusTimeTable/${id}`);
    }


    return (
      <div className="busTimeTableMainLayout">
        <br />
        <center>
          <h2>Manage Bus Timetable</h2>
        </center>
        <br />

        <button
          className="btnPink ms-3 mb-3"
          style={{ width: "250px" }}
          onClick={() => addNewBusTimetable()}
        >
          Add New Bus Timetable
        </button>
        <br />
        <br />

        <div>
          <table id="bus-time-table" className="fs-5 m-auto">
            <tr>
              <th>Timetable ID</th>
              <th>Start Location</th>
              <th>Destination Location</th>
              <th>Starting Time</th>
              <th>Ending Time</th>
              <th>Bus Registration No</th>
              <th>Action </th>
            </tr>

            {timeTables.map((lb) => (
              <tr key={lb._id}>
                <td>{lb.TimeTableID}</td>
                <td>{lb.StartLocation}</td>
                <td>{lb.DestinationLocation}</td>
                <td>{lb.StartingTime}</td>
                <td>{lb.EndTime}</td>
                <td>{lb.BusRegistrationNo}</td>
                <td>
                  {" "}
                  <div className="labelBtnEdit">
                    <button
                      onClick={() => editBusTimetable(lb._id)}
                      className="btnOrange"
                    >
                      Edit
                    </button>
                    <button onClick={() => handleOpen(lb)} className="btnRed">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    );
}

export default BusTimeTable