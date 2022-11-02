import React, { useContext, useState } from "react";
import axios from "axios";
// import { GlobalState } from "../../../GlobalState";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const initialState = {
    chassieNo:"",
    noOfSeat:"",
    type:"",
    condition:"",
    busNumber: ""
};

function AddBus() {
    const [data, setData] = useState(initialState);
    const {chassieNo,noOfSeat,type, condition,busNumber} = data
    console.log("🚀 ~ file: AddBus.js ~ line 15 ~ AddBus ~ data", data)
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const addBusDetailsHandler = async (e) => {
        e.preventDefault();
        if (chassieNo === "" ||  noOfSeat === "" ||  type===""||condition===""||busNumber==="") {
            alert("Fill all the fields");
        } else {
            try {
                const res = await axios.post("/api/bus/register",{chassieNo,noOfSeat,type, condition,busNumber});
                // console.log(res)
                // alert(res.data)
                // setOpen(false)
                toast.success(res.data.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                // window.location.href = '/pharmacist'
            } catch (err) {
                console.log(err);
                toast.error(err.response.data.msg, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
            }
        }
    };

    const cancelBtn = () => {
        navigate('/AllBusView')
    }

  return (
    <div className="layout">
        <ToastContainer />
    <form className="form" controlId="formBasicEmail" action="">
        <div className=""><br />
            <h2 className="brand-title"><center>Add Bus</center></h2>
            <div className="inpt ms-4"> <br /><br />
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">Chassis No</label></div>
                    <div class="col-7"><input className="inputs" type="city" name="chassieNo" required  placeholder='Chassis No' onChange={onChangeHandler}/><br /><br /></div>
                </div>
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">No of Seat</label></div>
                    <div class="col-7"><input className="inputs" type="number" name="noOfSeat" required  placeholder='No of Seat' onChange={onChangeHandler}/><br /><br /></div>
                </div>
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">Type</label></div>
                    <div class="col-7"><input className="inputs" type="city" name="type" required  placeholder='Type' onChange={onChangeHandler}/><br /><br /></div>
                </div>
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">Condition</label></div>
                    <div class="col-7"><input className="inputs" type="city" name="condition" required  placeholder='Condition' onChange={onChangeHandler}/><br /><br /></div>
                </div>
                <div className="row">
                    <div class="col-0.5"></div>
                    <div class="col-4"><label className="label">Bus Number</label></div>
                    <div class="col-7"><input className="inputs" type="city" name="busNumber" required  placeholder='Bus Number'onChange={onChangeHandler} /><br /><br /></div>
                </div>
            </div>
            <div>
                <div className="" style={{textAlign: 'right'}}><br />
                <button className="btn btn-warning" type="submit"  
                style={{ "border-radius":"10px","height":"40px", "margin":"10px","width":"70px"}}
                onClick={addBusDetailsHandler} >Add
                </button>
                <button className="btn btn-danger" type="submit" 
                style={{ "border-radius":"10px","height":"40px"}} 
                onClick={cancelBtn}>Cancel
                </button>
                </div> <br />
                
            </div>
        </div>
    </form>



</div>
  )
}

export default AddBus