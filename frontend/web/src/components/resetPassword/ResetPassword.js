import { React, useState } from "react";
import axios from "axios";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    password: "",
    confirmPassword: ""
};

function ResetPassword() {
    const [data, setData] = useState(initialState);
    const { password, confirmPassword } = data;
    const [visible, setVisible] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        setVisible(!visible);
    };

    const resetPassword = async (e) => {
        e.preventDefault();

        // check fields
        if (!password || !confirmPassword)
            return toast("Please Fill in All the Fields !", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });

    }


    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Reset Password</center></h2>
                    <div className="inpt"> <br /><br /><br />
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Password</label></div>
                            <div class="col-7"><input className="inputs" type={visible ? "text" : "password"}
                                name="password" required
                                placeholder='Password'
                                onChange={handleChange} /><span className="icons" onClick={handleClick}>{visible ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                        </div><br />
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Confirm Password</label></div>
                            <div class="col-7"><input className="inputs" type={visible ? "text" : "password"}
                                name="confirmPassword" required
                                placeholder='Confirm Password'
                                onChange={handleChange} /><span className="icons" onClick={handleClick}>{visible ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                        </div>

                    </div>
                    <div>

                        <div className=""><br /> <br />
                        <center><button className="btnPink" type="submit" onClick={resetPassword}>Reset</button></center>
                        </div> <br />

                    </div>
                </div>

                <center><a className="bodyLink" href="/signin">Login ?</a></center>
            
                <br /><br />

            </form>

        </div>
    )
}

export default ResetPassword