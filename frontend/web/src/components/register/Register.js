import React, { useEffect, useState } from 'react'
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


const Register = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const [isLocal, setIsLocal] = useState('');
    console.log("🚀 ~ file: Register.js ~ line 16 ~ Register ~ isLocal", isLocal)
    const [isToken, setIsToken] = useState(false);
    const [tokenID, setTokenID] = useState('');
    const [isButtonDisable, setIsButtonDisable] = useState(true);

    const genarateToken = async () => {
        try {
            setTokenID('');
            let token;
            let isEqual = true
            while (isEqual === true) {
                try {
                    if (!isEqual) {
                        break;
                    }
                    token = 'T' + Math.floor((Math.random() * 100000000)) + '_tmp';
                    const res = await axios.post('/api/token/checkToken', { token })
                    isEqual = res.data.success
                } catch (error) {
                    console.log("🚀 ~ file: Register.js ~ line 34 ~ genarateToken ~ error", error)
                    break;
                }
            }
            if (!isEqual) {
                const res = await axios.post("/api/token/genareteToken", { tokenID: token, tokenType: 'tmp' })
                setTokenID(res.data.Token.tokenID);
            }
        } catch (error) {
            console.log("🚀 ~ file: Register.js ~ line 24 ~ genarateToken ~ error", error)
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

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cf_password, setCf_Password] = useState('')
    const [nationalID, setNationalID] = useState('')
    const [passportNo, setPassportNo] = useState('')
    const [value, setValue] = useState() //phone number

    const setIsLocalsValue = (e) => {
        setIsLocal(e.target.value)
        setIsToken(false)
        setTokenID('')
        setNationalID('')
        setPassportNo('')
    }

    const setIsHaveToken = (e) => {
        setIsToken(!isToken)
        setTokenID('')
    }

    const handleClick = () => {
        setVisible(!visible);
    };

    const handleClick2 = () => {
        setVisible2(!visible2);
    };

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const changeCf_Password = (e) => {
        setCf_Password(e.target.value)
    }

    const changeNationalID = (e) => {
        setNationalID(e.target.value)
    }

    const changePassportNo = (e) => {
        setPassportNo(e.target.value)
    }


    const changeTokenID = (e) => {
        setTokenID(e.target.value)
    }


    const register = async (e) => {
        e.preventDefault();
        if (password !== cf_password) {
            toast.error('Passwords are not matched', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            try {
                const res = await axios.post('api/auth/register', {
                    email,
                    password,
                    role: isLocal === 'local' ? 'n_passanger' : 'f_passanger',
                    phone: value,
                    name,
                    nationalID,
                    passportID: passportNo,
                    tokenID
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
                window.location.href = "/signin";

            } catch (error) {
                console.log("🚀 ~ file: Register.js ~ line 121 ~ register ~ error", error)
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

    }
    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Passenger Register</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Name</label></div>
                            <div class="col-7"><input className="inputs" value={name} onChange={changeName} type="name" name="name" required placeholder='Name' /><br /><br /></div>
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
                        <hr />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Account type</label></div>
                            <div class="col-7"><div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check" onChange={setIsLocalsValue} value='local' name="btnradio" id="btnradio1" />
                                <label class="btn btn-outline-primary" for="btnradio1">Local</label>

                                <input type="radio" class="btn-check" onChange={setIsLocalsValue} value='foriegn' name="btnradio" id="btnradio2" />
                                <label class="btn btn-outline-primary" for="btnradio2">Foreign</label>

                            </div><br /><br /></div>
                        </div>
                        {
                            isLocal === 'local' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">NIC No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="NIC No" value={nationalID} onChange={changeNationalID} required placeholder='National Identy Card Number' /><br /><br /></div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Token</label></div>
                                    <div class="col-7">
                                        <div class={isToken ? "btn btn-primary" : "btn btn-outline-primary"} onClick={setIsHaveToken}>Yes, I have a token</div>
                                        <div class={isToken ? "btn btn-outline-primary" : "btn btn-primary"} onClick={setIsHaveToken} >No, I have not a token</div>


                                        <br /><br /></div>
                                </div>
                                {
                                    isToken ? <>
                                        <div className="row">
                                            <div class="col-1"></div>
                                            <div class="col-3"><label className="label">Token ID</label></div>
                                            <div class="col-7"><input className="inputs" type="text" name="Token ID" value={tokenID} onChange={changeTokenID} required placeholder='Token ID' /><br /><br /></div>
                                        </div>
                                    </> : <>
                                        <div className="row">
                                            <div className='warningNoToken'>Make sure to get a token nearest Bus depot office</div><br /><br></br>
                                        </div>
                                    </>
                                }
                            </>
                        }
                        {
                            isLocal === 'foriegn' &&
                            <>
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Passport No</label></div>
                                    <div class="col-7"><input className="inputs" type="text" name="passport_no" value={passportNo} onChange={changePassportNo} required placeholder='Passport Number' /><br /><br /></div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div class="col-1"></div>
                                    <div class="col-3"><label className="label">Token</label></div>
                                    <div class="col-7">
                                        <div class={isToken ? "btn btn-primary" : "btn btn-outline-primary"} onClick={setIsHaveToken}>Yes, I have a token</div>
                                        <div class={isToken ? "btn btn-outline-primary" : "btn btn-primary"} onClick={setIsHaveToken} >No, I have not a token</div>


                                        <br /><br /></div>
                                </div>
                                {
                                    isToken ? <>
                                        <div className="row">
                                            <div class="col-1"></div>
                                            <div class="col-3"><label className="label">Token ID</label></div>
                                            <div class="col-7"><input className="inputs" type="text" name="Token ID" value={tokenID} onChange={changeTokenID} required placeholder='Token ID' /><br /><br /></div>
                                        </div>
                                    </> : <>
                                        <div className="row">
                                            {
                                                tokenID && <h6>Your Token Number is : {tokenID}</h6>
                                            }
                                            <div className="btn btn-outline-warning" onClick={genarateToken} >Genarate Tempery Token</div><br /><br></br>

                                        </div>
                                    </>
                                }
                                <hr />
                            </>
                        }
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Email</label></div>
                            <div class="col-7"><input className="inputs" type="email" name="email" value={email} onChange={changeEmail} required placeholder='Email' /><br /><br /></div>
                        </div>
                        <div className="">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-3"><label className="label">Password</label></div>
                                <div class="col-7"><input className="inputs" onChange={changePassword} type={visible ? "text" : "password"}
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
                                <div class="col-7"><input className="inputs" onChange={changeCf_Password} type={visible2 ? "text" : "password"}
                                    name="password" required
                                    placeholder='Re-Password'
                                /><span className="icons" onClick={handleClick2}>{visible2 ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                            </div>
                            <br />
                        </div>
                    </div>
                    <div>
                        <div className=""><br />
                            <center><button className="btnPink" onClick={register} type="submit" >Sign up</button></center></div> <br />
                    </div>
                </div>
                <center>
                    <a className="bodyLink" href="/signin">Sign In</a><br /> <br />
                </center>
            </form>
        </div>
    )
}

export default Register