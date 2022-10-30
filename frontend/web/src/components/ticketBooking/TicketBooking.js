import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ticketBooking.css"
const initialState = {
    noOfPassengers: "",
    paymentMethod: "",
    cardNumber: "",
    expMonth : "",
    expYear : "",
    cvcNumber: ""
};

function TicketBooking() {
    const [data, setData] = useState(initialState);
    const { noOfPassengers, paymentMethod, cardNumber, cvcNumber , expYear , expMonth } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const payHandler = async (e) => {
        e.preventDefault();

        // check fields
        if (!noOfPassengers || !paymentMethod || !cardNumber || !cvcNumber || !expMonth || !expYear)
            return toast("Please fill in all fields.", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });

        if (cardNumber.length != 16)
            return toast("Card Number Should Contain 16 Digits", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });

        if (cvcNumber.length != 3)
            return toast("CVC Number Should Contain 3 Digits", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });
    };

    return (
        <div>
            <ToastContainer />
            <div className='Qbody'>
                <br />
                <div className='QBottom'>
                    <div className='QBottomL fs-5'>
                        <h3 ><center>Bus Details</center></h3>
                        <hr />
                        <div class="row mt-4">
                            <div class="col-6 ">
                                Timetable ID
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                BT001
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 ">
                                Start Location
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                Kaluthara
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 ">
                                Destination
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                Mathugama
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 ">
                                Start Time
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                10:00 AM
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 ">
                                End Time
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                11:00 AM
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-6 ">
                                Bus Registration Number
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                NB-3256
                            </div>
                        </div>

                    </div>
                    <div className='QBottomR'>
                        <div className=''>
                            <h3 ><center>Fill Booking Details</center></h3>
                            <hr />

                            <form action="">
                                <div className="inpt"> <br />
                                    <div className="row me-2 mt-3">
                                        <div class="col-1"></div>
                                        <div class="col-3"><label className="label">No Of Passengers</label></div>
                                        <div class="col-7"><input className="inputs" type="number" name="noOfPassengers" required onChange={handleChange} min={1} max={5} placeholder='Select Number Between 1 to 5' /><br /><br /></div>
                                    </div>
                                    <div className="row me-2 mt-3">
                                        <div class="col-1"></div>
                                        <div class="col-3"><label className="label">Payment Method</label></div>
                                        <div class="col-7">
                                            <div className='row'>
                                                <div className='col-5'><input className="radioButton ms-3 me-3" type="radio" name="paymentMethod" required onChange={handleChange} /><label className="label">Credit</label></div>
                                                <div className='col-4'><input className="radioButton ms-3 me-3" type="radio" name="paymentMethod" required onChange={handleChange} /><label className="label">Debit</label></div>
                                            </div>
                                        </div><br /><br />
                                    </div>
                                    <div className="row me-2 mt-3">
                                        <div class="col-1"></div>
                                        <div class="col-3"><label className="label">Card Number</label></div>
                                        <div class="col-7"><input className="inputs" type="number" name="cardNumber" onChange={handleChange} placeholder='XXXX XXXX XXXX XXXX' /><br /><br /></div>
                                    </div>

                                    <div className="row me-2 mt-3">
                                        <div class="col-1"></div>
                                        <div class="col-3"><label className="label">Expiration Month</label></div>
                                        <div class="col-7">
                                            <div className='row'>
                                                <div className='col-3'>
                                                    <select class="inputs" name="expMonth" required>
                                                        <option value="" selected>Month</option>
                                                        <option value="01">01</option>
                                                        <option value="02">02</option>
                                                        <option value="03">03</option>
                                                        <option value="04">04</option>
                                                        <option value="05">05</option>
                                                        <option value="06">06</option>
                                                        <option value="07">07</option>
                                                        <option value="08">08</option>
                                                        <option value="09">09</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select>
                                                </div>
                                                <div className='col-1'></div>
                                                <div className='col-4'><label className="label">Expiration Year</label></div>
                                                <div className='col-1'></div>
                                                <div className='col-3'>
                                                    <select class="inputs" name="expYear" required>
                                                        <option value="" selected>Year</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2030">2030</option>
                                                    </select>
                                                </div>
                                            </div><br />
                                        </div>
                                    </div>

                                    <div className="row me-2 mt-3">
                                        <div class="col-1"></div>
                                        <div class="col-3"><label className="label">CVC Number</label></div>
                                        <div class="col-7"><input className="inputs" type="number" name="cvcNumber" required maxLength={3} onChange={handleChange} placeholder='XXX' /><br /><br /></div>
                                    </div>

                                </div>
                                <div>

                                    <div className="align" ><br />
                                        <button className="btnPink me-5" type="submit" onClick={payHandler} >Pay</button></div> <br />

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TicketBooking