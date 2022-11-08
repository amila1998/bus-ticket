import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditBus() {
    const { id } = useParams();
    console.log("🚀 ~ file: EditBus.js ~ line 9 ~ EditBus ~ id",id)
    const [bus, setBus] = useState();
    console.log("🚀 ~ file: EditBus.js ~ line 11 ~ EditBus ~ bus", bus)
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setBus({ ...bus, [e.target.name]: e.target.value });
      };
      useEffect(() => {
        const getBus = async () => {
          try {
            const res = await axios.get(`/api/getOneBus/${id}`);
            setBus(res.data.OneBus);
          } catch (error) {
            console.log(error.message);
          }
        };
       getBus();
      }, [id]);
      const editBusHandler = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.put(`/api/editBus/${id}`, {
            chassieNo: bus.chassieNo,
            noOfSeat: bus.noOfSeat,
            type: bus.type,
            condition: bus.condition,
            busNumber: bus.busNumber,
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
          window.location.href = "/AllBusView";
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
        navigate('/AllBusView');
      };
  return (
    <div className="layout">
    <ToastContainer />
<form className="form" controlId="formBasicEmail" action="">
    <div className=""><br />
        <h2 className="brand-title"><center>Edit Bus</center></h2>
        <div className="inpt ms-4"> <br /><br />
            <div className="row">
                <div class="col-0.5"></div>
                <div class="col-4"><label className="label">Chassis No</label></div>
                <div class="col-7"><input className="inputs" type="city" name="chassieNo" required  placeholder='Chassis No' 
                onChange={onChangeHandler}
                defaultValue={bus?.chassieNo}/>
                <br /><br /></div>
            </div>
            <div className="row">
                <div class="col-0.5"></div>
                <div class="col-4"><label className="label">No of Seat</label></div>
                <div class="col-7"><input className="inputs" type="number" name="noOfSeat" required  placeholder='No of Seat' 
                onChange={onChangeHandler}
                defaultValue={bus?.number}/><br /><br /></div>
            </div>
            <div className="row">
                <div class="col-0.5"></div>
                <div class="col-4"><label className="label">Type</label></div>
                <div class="col-7"><input className="inputs" type="city" name="type" required  placeholder='Type' 
                onChange={onChangeHandler}
                defaultValue={bus?.type}/><br /><br /></div>
            </div>
            <div className="row">
                <div class="col-0.5"></div>
                <div class="col-4"><label className="label">Condition</label></div>
                <div class="col-7"><input className="inputs" type="city" name="condition" required  placeholder='Condition' 
                onChange={onChangeHandler}
                defaultValue={bus?.condition}/><br /><br /></div>
            </div>
            <div className="row">
                <div class="col-0.5"></div>
                <div class="col-4"><label className="label">Bus Number</label></div>
                <div class="col-7"><input className="inputs" type="city" name="busNumber" required  placeholder='Bus Number'
                onChange={onChangeHandler} 
                defaultValue={bus?.busNumber}/><br /><br /></div>
            </div>
        </div>
        <div>
            <div className="" style={{textAlign: 'right'}}><br />
            <button className="btn btn-warning" type="submit"  
            style={{ "border-radius":"10px","height":"40px", "margin":"10px","width":"70px"}}
            onClick={editBusHandler}
             >Add
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

export default EditBus