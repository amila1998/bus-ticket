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
    const [token] = gState.token

   // const [isLocal, setIsLocal] = useState('');
    //const [isToken, setIsToken] = useState(false);
    const [role, setRole] = useState('')
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('Pa$$w0rd');
    const [cf_password,setCf_Password]= useState('Pa$$w0rd');
    const [nationalID,setNationalID]= useState('');
    const [passportID,setPassportID]= useState('');
    const [employeeID,setEmployeeID]= useState('');


    
    
    // const setIsLocalsValue = (e) => {
    //     setIsLocal(e.target.value)
    //     setIsToken(false)
    // }

    // const setIsHaveToken = (e) => {
    //     setIsToken(!isToken)
    // }

    const handleClick = () => {
        setVisible(!visible);
    };

    const handleClick2 = () => {
        setVisible2(!visible2);
    };

    const handleRole = (e) => {
        setPassportID('')
        setNationalID('')
        setEmployeeID('')
        setRole(e.target.value)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeCf_Password = (e) => {
        setCf_Password(e.target.value)
    }

    const onChangePassportNo = (e) => {
        setPassportID(e.target.value)
    }

    const onChangeNicNo = (e) => {
        setNationalID(e.target.value)
    }

    const onChangeEmployeeID = (e) => {
        setEmployeeID(e.target.value)
    }


    const [value, setValue] = useState()



    const addUser =async(e) => {
        e.preventDefault();
        try {
            if (password===cf_password){
                const res = await axios.post('/api/auth/addUser',{email, password, role, phone:value, name, nationalID, passportID, employeeID}, {
                    headers: { Authorization: token }
                })
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.href = "/userManagement";
            }else{
                toast.error('Passwords are not matched', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            
            
        } catch (error) {
            console.log("🚀 ~ file: AddNewUser.js ~ line 93 ~ addUser ~ error", error)
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
    }

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
                            <div class="col-7"><input className="inputs" type="name" name="name" onChange={onChangeName} required placeholder='Name' /><br /><br /></div>
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
                            <div class="col-7"><input className="inputs" type="email" name="email"  onChange={onChangeEmail}  required placeholder='Email' /><br /><br /></div>
                        </div>
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Role</label></div>
                            <div class="col-7">
                                <select value={role} onChange={handleRole} className="inputs" >
                                    <option value={''} disabled selected>--Select a role--</option>
                                    {
                                        isAdmin &&
                                        <option value={"admin"}>Admin</option>
                                    }
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
                                    <div class="col-7"><input className="inputs" type="text" name="employee Id"  onChange={onChangeEmployeeID}  required placeholder='Employee ID' /><br /><br /></div>
                                </div>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="NIC no"  onChange={onChangeNicNo}  required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        {
                            role === 'inspector' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Employee ID</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="employee Id" onChange={onChangeEmployeeID} required placeholder='Employee ID' /><br /><br /></div>
                                </div>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="NIC no" onChange={onChangeNicNo} required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        {
                            role === 'bus_driver' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Employee ID</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="employee Id" onChange={onChangeEmployeeID} required placeholder='Employee ID' /><br /><br /></div>
                                </div>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="NIC no" onChange={onChangeNicNo}  required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        {
                            role === 'n_passanger' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="NIC no" onChange={onChangeNicNo} required placeholder='NIC No' /><br /><br /></div>
                                </div>
                            </>
                        }
                             {
                            role === 'f_passanger' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Passport No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="passport no" onChange={onChangePassportNo} required placeholder='Passport No' /><br /><br /></div>
                                </div>
                            </>
                        }
                        <div className="">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-3"><label className="label">Password</label></div>
                                <div class="col-7"><input className="inputs" value={password} onChange={onChangePassword} type={visible ? "text" : "password"}
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
                                <div class="col-7"><input className="inputs" value={cf_password} onChange={onChangeCf_Password} type={visible2 ? "text" : "password"}
                                    name="password" required
                                    placeholder='Re-Password'
                                /><span className="icons" onClick={handleClick2}>{visible2 ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div>
                        <div className=""><br />
                            <center><button className="btnPink"onClick={addUser} type="submit" >Add</button></center></div> <br />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewUser