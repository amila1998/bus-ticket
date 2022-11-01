import React, { useContext, useEffect, useState } from 'react'
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { GlobalState } from '../../../GlobalState';

const AddNewUser = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const gState = useContext(GlobalState)
    const [isAdmin] = gState.userAPI.isAdmin
    const [istransport_manager] = gState.userAPI.istransport_manager
    const [token] = gState.token

    const [isLocal, setIsLocal] = useState('');
    const [isToken, setIsToken] = useState(false);
    const [role, setRole] = useState('')
    console.log("🚀 ~ file: AddNewUser.js ~ line 22 ~ AddNewUser ~ role", role)

    const setIsLocalsValue = (e) => {
        setIsLocal(e.target.value)
        setIsToken(false)
    }

    const setIsHaveToken = (e) => {
        setIsToken(!isToken)
    }

    const handleClick = () => {
        setVisible(!visible);
    };

    const handleClick2 = () => {
        setVisible2(!visible2);
    };

    const handleRole = (e) => {


        setRole(e.target.value)
    }


    const [value, setValue] = useState()
    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Add New User</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Name</label></div>
                            <div class="col-7"><input className="inputs" type="name" name="name" required placeholder='Name' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Phone</label></div>
                            <div class="col-7"><PhoneInput
                                defaultCountry='LK'
                                placeholder="Phone Number (+94 77 111 1111)"
                                value={value}
                                international
                                countryCallingCodeEditable={false}
                                onChange={setValue}
                            /><br /></div>
                        </div>


                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Email</label></div>
                            <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Email' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Role</label></div>
                            <div class="col-7">
                                <select value={role} onChange={handleRole} className="inputs" >
                                    <option value={''} disabled selected>--Select a role--</option>
                                    <option value={'admin'}>Admin</option>
                                    <option value={'n_passanger'}>Local Passenger</option>
                                    <option value={'f_passanger'}>Foriegn Passenger</option>
                                    <option value={'bus_driver'}>Bus Driver</option>
                                    <option value={'inspector'}>Inspector</option>
                                    <option value={'transport_manager'}>Transport Manager</option>
                                </select>
                                <br /><br /></div>
                        </div>
                        {
                            role === 'transport_manager' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Employee ID</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Employee ID' /><br /><br /></div>
                                </div>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        {
                            role === 'inspector' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Employee ID</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Employee ID' /><br /><br /></div>
                                </div>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        {
                            role === 'bus_driver' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Employee ID</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Employee ID' /><br /><br /></div>
                                </div>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        {
                            role === 'n_passanger' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                             {
                            role === 'f_passanger' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Passport No</label></div>
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Passport No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        <div className="">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-3"><label className="label">Password</label></div>
                                <div class="col-7"><input className="inputs" type={visible ? "text" : "password"}
                                    name="password" required
                                    placeholder='Password'
                                /><span className="icons" onClick={handleClick}>{visible ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                            </div>
                            <br />
                        </div>
                        <div className="">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-3"><label className="label">Conform Password</label></div>
                                <div class="col-7"><input className="inputs" type={visible ? "text" : "password"}
                                    name="password" required
                                    placeholder='Re-Password'
                                /><span className="icons" onClick={handleClick2}>{visible2 ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div>
                        <div className=""><br />
                            <center><button className="btnPink" type="submit" >Sign up</button></center></div> <br />
                    </div>
                </div>
                <center>
                    <a className="bodyLink" href="/signin">Sign In</a><br /> <br />
                </center>
            </form>
        </div>
    )
}

export default AddNewUser