import { React, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    email: ""
};

function ForgotPassword() {
    const [data, setData] = useState(initialState);
    const { email } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const forgotPassword = async (e) => {
        e.preventDefault();

        // check fields
        if (!email)
            return toast("Please Enter Your E-mail !", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });

    }

    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Forgot Password</center></h2><div className="inpt"> <br /><br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-2"><label className="label">Email</label></div>
                            <div class="col-8"><input className="inputs" type="email" name="email" required onChange={handleChange} placeholder='Email' /><br /><br /></div>
                        </div>

                    </div>
                    <div>
                        <div className=""><br />
                            <center><button className="btnPink" type="submit" onClick={forgotPassword}>Send</button></center>
                        </div> <br />
                    </div>
                </div>
                <center>
                    <a className="bodyLink" href="/signin">Login ?</a><br /><br />
                    <a className="bodyLink" href="/signup">Register ? </a><br /> <br />
                </center>

            </form>



        </div>
    )
}

export default ForgotPassword    