import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BusTimeTable from "./BusTimeTable";

const EditBusTimeTable = () => {
  const { id } = useParams();
  console.log(
    "🚀 ~ file: EditBusTimeTable.js ~ line 11 ~ EditBusTimeTable ~ id",
    id
  );
  const [busTimeTable, setBusTimeTable] = useState();
  console.log(
    "🚀 ~ file: EditBusTimeTable.js ~ line 13 ~ EditBusTimeTable ~ busTimeTable",
    busTimeTable
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBusTimeTable({ ...busTimeTable, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getTimeTables = async () => {
      try {
        const res = await axios.get(`/api/timetable/${id}`);
        setBusTimeTable(res.data.OneTimetables);
      } catch (error) {
        alert(error.message);
      }
    };
    getTimeTables();
  }, [id]);

  const editBusTimeTableHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/api/timetable/update/${id}`, {
        TimeTableID: busTimeTable.TimeTableID,
        StartLocation: busTimeTable.StartLocation,
        DestinationLocation: busTimeTable.DestinationLocation,
        StartingTime: busTimeTable.StartingTime,
        EndTime: busTimeTable.EndTime,
        BusRegistrationNo: busTimeTable.BusRegistrationNo,
      });
      toast.success(res.data.msg, {
            
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
      window.location.href = "/busTimeTable";
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
    navigate("/busTimeTable");
  };
  return (
    <div className="layout">
      <ToastContainer />
      <form className="form" controlId="formBasicEmail" action="">
        <div className="">
          <br />
          <h2 className="brand-title">
            <center>Edit Bus Timetable</center>
          </h2>
          <div className="inpt">
            {" "}
            <br />
            <br />
            <div className="row">
              <div class="col-1"></div>
              <div class="col-4">
                <label className="label">TimeTable ID</label>
              </div>
              <div class="col-6">
                <input
                  className="inputs"
                  type="text"
                  name="TimeTableID"
                  required
                  onChange={handleChange}
                  placeholder="Enter Time Table ID"
                  defaultValue={busTimeTable?.TimeTableID}
                />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div class="col-1"></div>
              <div class="col-4">
                <label className="label">Start Location</label>
              </div>
              <div class="col-6">
                <input
                  className="inputs"
                  type="city"
                  name="StartLocation"
                  required
                  onChange={handleChange}
                  placeholder="Enter Start Location"
                  defaultValue={busTimeTable?.StartLocation}
                />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div class="col-1"></div>
              <div class="col-4">
                <label className="label">Destination Location</label>
              </div>
              <div class="col-6">
                <input
                  className="inputs"
                  type="city"
                  name="DestinationLocation"
                  required
                  onChange={handleChange}
                  placeholder="Enter Destination Location"
                  defaultValue={busTimeTable?.DestinationLocation}
                />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div class="col-1"></div>
              <div class="col-4">
                <label className="label">Starting Time</label>
              </div>
              <div class="col-6">
                <input
                  className="inputs"
                  type="time"
                  name="StartingTime"
                  onChange={handleChange}
                  defaultValue={busTimeTable?.StartingTime}
                />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div class="col-1"></div>
              <div class="col-4">
                <label className="label">End Time</label>
              </div>
              <div class="col-6">
                <input
                  className="inputs"
                  type="time"
                  name="EndTime"
                  onChange={handleChange}
                  defaultValue={busTimeTable?.EndTime}
                />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div class="col-1"></div>
              <div class="col-4">
                <label className="label">Bus Registration Number</label>
              </div>
              <div class="col-6">
                <input
                  className="inputs"
                  type="text"
                  name="BusRegistrationNo"
                  required
                  onChange={handleChange}
                  placeholder="Enter Bus Registration Number"
                  defaultValue={busTimeTable?.BusRegistrationNo}
                />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div>
            <br />
            <center>
              <button
                className="deleteBtn me-5"
                type="submit"
                onClick={cancelBtn}
              >
                Cancel
              </button>
              <button
                className="editBtn ms-5"
                type="submit"
                onClick={editBusTimeTableHandler}
                style={{ width: "130px" }}
              >
                Save{" "}
              </button>
            </center>
            <br />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBusTimeTable;
