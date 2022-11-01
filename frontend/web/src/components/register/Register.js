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
    const [isToken, setIsToken] = useState(false);
    console.log("🚀 ~ file: Register.js ~ line 16 ~ Register ~ isToken", isToken)

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

    const [value, setValue] = useState()
    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Passanger Register</center></h2>
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
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='National Identy Card Number' /><br /><br /></div>
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
                                            <div class="col-7"><input className="inputs" type="name" name="name" required placeholder='Token ID' /><br /><br /></div>
                                        </div>
                                    </> : <>
                                        <div className="row">
                                            <div className='warningNoToken'>Make sure to get a token nearest Bus Depo</div><br /><br></br>
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
                                    <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Passport Number' /><br /><br /></div>
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
                                            <div class="col-7"><input className="inputs" type="name" name="name" required placeholder='Token ID' /><br /><br /></div>
                                        </div>
                                    </> : <>
                                        <div className="row">
                                            <button>Genarate Tempery Token</button><br /><br></br>
                                        </div>
                                    </>
                                }
                            </>
                        }
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Email</label></div>
                            <div class="col-7"><input className="inputs" type="email" name="email" required placeholder='Email' /><br /><br /></div>
                        </div>
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

export default Register