const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const createToken = require("../helpers/createToken");
const validateEmail = require("../helpers/validateEmail");
const User = require("../models/userModel");
const Token = require("../models/tokenModel");


const userController = {
    register: async (req, res) => {
        try {
            const { email, password, role, phone, name, nationalID, passportID, tokenID, employeeID } = req.body;

            // check fields
            if (!name || !email || !password || !role)
                return res
                    .status(400)
                    .json({ message: "Please fill in all fields." });

            // check email
            if (!validateEmail(email))
                return res
                    .status(400)
                    .json({ message: "Please enter a valid email address." });

            // check user
            const exuser = await User.findOne({ email });
            if (exuser)
                return res
                    .status(400)
                    .json({ message: "This email is already registered in our system." });

            // check password
            if (password.length < 6)
                return res
                    .status(400)
                    .json({ message: "Password must be at least 6 characters." });

            if (role === 'n_passanger') {
                if (!nationalID)
                    return res
                        .status(400)
                        .json({ message: "Please enter your national identy card" });

                if (!tokenID) {
                    return res
                        .status(400)
                        .json({ message: "There should be a your token number" });
                }
            }

            if (role === 'n_employee' || role === 'f_employee') {
                if (tokenID) {
                    const token = Token.findOne({ tokenID: tokenID })
                    if (!token) {
                        return res
                            .status(400)
                            .json({ message: "Invalid token number" });
                    }
                }
            }


            if (role === 'f_passanger') {
                if (!passportID)
                    return res
                        .status(400)
                        .json({ message: "Please enter your passport number" });

                if (!tokenID) {
                    return res
                        .status(400)
                        .json({ message: "Please genarate your token number" });
                }
            }

            if (role === 'transport_manager') {
                if (!employeeID)
                    return res
                        .status(400)
                        .json({ message: "Please enter employee number" });
                if (!nationalID)
                    return res
                        .status(400)
                        .json({ message: "Please enter national identy number" });
            }



            // hash password
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                name,
                email,
                password: hashPassword,
                role,
                phone,
                tokenID
            })

            const user = await newUser.save();

            if (role === 'transport_manager') {
                await User.findByIdAndUpdate(user._id, { 'transport_manager.NICNo': nationalID, 'transport_manager.employeeID': employeeID })
            }

            if (role === 'bus_driver') {
                await User.findByIdAndUpdate(user._id, { 'bus_driver.NICNo': nationalID, 'bus_driver.employeeID': employeeID })
            }

            if (role === 'inspector') {
                await User.findByIdAndUpdate(user._id, { 'inspector.NICNo': nationalID, 'inspector.employeeID': employeeID })
            }

            if (role === 'n_passanger') {
                await User.findByIdAndUpdate(user._id, { 'n_passanger.nationalID': nationalID })
                await Token.findOneAndUpdate({ tokenID }, { 'user_NIC_No': nationalID })
            }

            if (role === 'f_passanger') {
                await User.findByIdAndUpdate(user._id, { 'f_passanger.passportID': passportID })
                await Token.findOneAndUpdate({ tokenID }, { 'user_NIC_No': passportID })
            }




            res.status(200).json({
                message: "User Registartion Succeessfull !!!",
                success: true,
            });
        } catch (error) {
            console.log("🚀 ~ file: userController.js ~ line 15 ~ register: ~ error", error)
            res.status(500).json({
                message: error.message,
                success: false
            });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // check fields
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ message: "Please fill in all fields." });
            }

            // check email
            if (!validateEmail(email))
                return res
                    .status(400)
                    .json({ message: "Please enter valid email" });

            // check email
            const user = await User.findOne({ email });
            if (!user)
                return res
                    .status(400)
                    .json({ msg: "This email is not registered in our system." });

            // check password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch)
                return res.status(400).json({ msg: "This password is incorrect." });

            // create a cookie
            const token = createToken.access({ id: user._id });

            // signing success
            res.status(200).json({ msg: "Signing success", token });

        } catch (error) {
            console.log("🚀 ~ file: userController.js ~ line 66 ~ login: ~ error", error)
            res.status(500).json({
                message: error.message,
                success: false
            });
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select('-password')
            if (!user) return res.status(400).json({ msg: "User does not exist." })

            res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    logout: async (req, res) => {

        const token = createToken.access({ id: 'asdjkasdasdhashdkasd' });
        res.status(200).json({ msg: "Signout success" });
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find().select('-password')
            res.status(200).json(users)
        } catch (error) {
            console.log("🚀 ~ file: userController.js ~ line 155 ~ getAllUser: ~ error", error)
            return res.status(500).json({ msg: err.message })
        }
    }

}

module.exports = userController;