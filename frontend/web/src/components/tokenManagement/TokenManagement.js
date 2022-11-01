import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TokenManagement = () => {
    const [tokens,getTokens]=useState([])
    const navigate = useNavigate()


  return (
    <div>
 <div className='adminDashboard'>
                <div className='title'>
                    Token Management
                    <hr />
                </div>
                <div className='adminMain'>
                    <div>
                        <br />

                        <div className='userMTopbar userMFlex'>
                            <div className='userMFlex'>
                                <div className='row userMTopbarrow'><select className="inputs">
                                    <option value='asc' selected>Accending</option>
                                    <option value='dsc'>Decending</option>
                           
                                </select></div>
                                <div className='row userMTopbarrow'><input className="inputs" type='text' placeholder='Search....' /></div>
                            </div>
                            <div className='row userMTopbarrow'>  <button onClick={()=>{navigate('/genarateToken')}} className='btn btn-success'>Add New Token</button></div>



                        </div>

                        <br />

                        <div>
                            <table  class="table  table-bordered table-hover">
                                <tr>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th>Date Created</th>
                                    <th>Date Updated</th>
                                    <th></th>
                                </tr>
                                {
                                    tokens.map(lb => (
                                        <tr key={lb._id}>
                                            <td>{lb.name}</td>
                                            <td>{lb.role}</td>
                                            <td>{moment(lb.createdAt).format("MMM Do YY")}</td>
                                            <td>{moment(lb.updatedAt).format("MMM Do YY")}</td>
                                            <td> <div className='labelBtnEdit'><button className='btn btn-warning'>Edit</button>

                                                <button className='btn btn-danger'>Delete</button>
                                            </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default TokenManagement