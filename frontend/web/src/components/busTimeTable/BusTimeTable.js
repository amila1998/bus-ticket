import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import close from "../../assets/close.png";
import "./busTimeTable.css";
import axios from "axios";
import DeleteModal from "./components/DeleteModal";



const BusTimeTable = () => {
  const navigate = useNavigate();
  const [timeTables, setTimeTables] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const getTimeTables = async () => {
    try {
      const res = await axios.get("/api/timetable/");
      console.log(res);
      setTimeTables(res.data.AllTimetables);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getTimeTables();
  }, []);
  React.useEffect(() => {
    getTimeTables();
  }, [open]);

  const deleteBusRoute = async (id) => {
    console.log(
      "🚀 ~ file: BusTimeTable.js ~ line 48 ~ deleteBusRoute ~ id",
      id
    );
    try {
      const res = await axios.delete(`/api/timetable/delete/${id}`);
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
    setCallback(true);
  };

  const addNewBusTimetable = () => {
    navigate("/addBusTimeTable");
  };

  const editBusTimetable = (id) => {
    navigate(`/editBusTimeTable/${id}`);
  };

  const handleCancel = () => {
    handleClose();
  };

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
          <tr className="fw-bold ms-3">
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
                    className="editBtn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleOpen();
                      setDeleteID(lb._id);
                    }}
                    className="deleteBtn"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <DeleteModal
        id={deleteID}
        open={open}
        handleClose={handleClose}
        handleCancel={handleCancel}
        close={close}
        deleteBusRoute={deleteBusRoute}
      />
    </div>
  );
};

export default BusTimeTable;
