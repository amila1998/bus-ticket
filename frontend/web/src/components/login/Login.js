import { useContext, useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './login.css'

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState(initialState);
    const { email, password } = data;
    const [isLoading, setisLoading] = useState(false);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        setVisible(!visible);
    };

    const login = async (e) => {
        e.preventDefault();

        // check fields
        if (!email || !password)
            return toast("Please fill in all fields.", {
                className: "toast-failed",
                bodyClassName: "toast-failed",
            });

        try {
            setisLoading(true);
            const res = await axios.post("/api/auth/signin", { email, password });
            localStorage.setItem("firstLogin", true);
            window.sessionStorage.setItem("_t@ken", res.data.token)
            setisLoading(false);
            toast.success(res.data.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            window.location.href = "/";
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="layout">
            <ToastContainer />
            <form className="form" controlId="formBasicEmail" action="">
                <div className=""><br />
                    <h2 className="brand-title"><center>Login</center></h2>
                    <div className="inpt"> <br /><br />
                        <div className="row">
                            <div class="col-1"></div>
                            <div class="col-3"><label className="label">Email</label></div>
                            <div class="col-7"><input className="inputs" type="email" name="email" required onChange={handleChange} placeholder='Email' /><br /><br /></div>
                        </div>
                        <div className="">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-3"><label className="label">Password</label></div>
                                <div class="col-7"><input className="inputs" type={visible ? "text" : "password"}
                                name="password" required
                                placeholder='Password'
                                onChange={handleChange} /><span className="icons" onClick={handleClick}>{visible ? <MdVisibility /> : <MdVisibilityOff />}</span></div>
                            </div>
                            
                            <br />
                        </div>
                    </div>
                    <div>

                        <div className=""><br />
                        <center><button className="btnPink" type="submit" onClick={login} >Sign In</button></center></div> <br />

                    </div>
                </div>
                <center>
                    <a className="bodyLink" href="/forgotPassword">Forgot Password ?</a><br /><br />
                    <a className="bodyLink" href="/signup">Sign Up</a><br /> <br />
                </center>
                

            </form>



        </div>
    )
}

export default Login