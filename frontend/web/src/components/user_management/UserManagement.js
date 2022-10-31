import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../../GlobalState'
import './userm.css'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const UserManagement = () => {
    const gState = useContext(GlobalState)
    const [isAdmin] = gState.userAPI.isAdmin
    const [users, setUsers] = useState([]);
    const [callback, setCallback] = useState(true)
    const [token] = gState.token
    const navigate = useNavigate();
    useEffect(() => {
        const getUsers = async () => {
            if (callback) {
                try {
                    const res = await axios.get('/api/getAllUsers', {
                        headers: { Authorization: token }
                    })
                    console.log("🚀 ~ file: UserManagement.js ~ line 19 ~ getUsers ~ res", res)
                    setUsers(res.data)
                } catch (error) {
                    console.log("🚀 ~ file: UserManagement.js ~ line 19 ~ getUsers ~ error", error)
                }
            }
        }
        getUsers();
        setCallback(false)
    }, [callback, token])

    return (
        <div>
            <div className='adminDashboard'>
                <div className='title'>
                    User Management
                    <hr />
                </div>
                <div className='adminMain'>
                    <div>
                        <br />

                        <div className='userMTopbar userMFlex'>
                            <div className='userMFlex'>
                                <div className='row userMTopbarrow'><select className="inputs">
                                    <option value=''>All Roles</option>
                                    <option value=''>Admins</option>
                                    <option value=''>Bus Drivers</option>
                                    <option value=''>Inspectors</option>
                                    <option value=''>Local Users</option>
                                    <option value=''>Foriegn Users</option>


                                </select></div>
                                <div className='row userMTopbarrow'><input className="inputs" type='text' placeholder='Search....' /></div>
                            </div>
                            <div className='row userMTopbarrow'>  <button onClick={()=>{navigate('/addNewUser')}} className='btn btn-success'>Add New User</button></div>



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
                                    users.map(lb => (
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

export default UserManagement