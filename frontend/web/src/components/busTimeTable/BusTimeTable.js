import React from 'react'
import "./busTimeTable.css"

const BusTimeTable = () => {
    return (
        <div>

            <div><button className='tbl-btn'>Add new bus timetable</button></div>
            <table class='table' id="bus-time-table">
                        <tr>
                            <th>Timetable ID</th>
                            <th>Start Location</th>
                            <th>Destination Location</th>
                            <th>Starting Time</th>
                            <th>Ending Time</th>
                            <th>Bus Registration No</th>
                            <th> </th>
                            
                        </tr>
                       

                        {/* {
                            filteredLabels.map(lb => (
                                <tr key={lb._id}>
                                    <td>{lb._id}</td>
                                    <td>{lb.LabelName}</td>
                                    <td>{moment(lb.createdAt).format("MMM Do YY")}</td>
                                    <td>{moment(lb.updatedAt).format("MMM Do YY")}</td>
                                    <td> <div className='labelBtnEdit'><button onClick={()=>handleEditOpen(lb)} className='btnOrange'>Edit</button>
                                    
                                        <button onClick={()=>handleOpenDelete(lb)} className='btnRed'>Delete</button>
                                    </div>
                                    </td>
                                </tr>
                            ))
                        } */}




                    </table>
        </div>
    )
}

export default BusTimeTable