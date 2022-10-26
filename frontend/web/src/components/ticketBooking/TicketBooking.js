import React from 'react'
import "./ticketBooking.css"
function TicketBooking() {
    return (
        <div>
            <div className='Qbody'>
                <br/>
                <div className='QBottom'>
                    <div className='QBottomL fs-5'>
                        <h3 ><center>Bus Details</center></h3>
                        <hr />
                        <div class="row mb-2">
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

                        <div class="row mb-2">
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

                        <div class="row mb-2">
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

                        <div class="row mb-2">
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

                        <div class="row mb-2">
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

                        <div class="row mb-2">
                            <div class="col-6 ">
                                Bus Registration Number
                            </div>
                            <div class="col-1 ">
                                :
                            </div>
                            <div class="col-5 fw-bold" >
                                NB-2256
                            </div>
                        </div>

                    </div>
                    <div className='QBottomR'>
                        <div className=''>
                        <h3 ><center>Fill Booking Details</center></h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TicketBooking