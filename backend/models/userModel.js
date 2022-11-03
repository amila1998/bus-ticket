const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        logo: {
            type: String,
            default: "https://res.cloudinary.com/quick-health/image/upload/v1662370751/profile%20pics/8f1b09269d8df868039a5f9db169a772_jedu4q.jpg"
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        tokenID: {
            type: String,
        },
        password: { type: String, required: true },
        phone:{
            type:String,
           },
        role: {
            type: String,
            required: true,
            enum: ['n_passanger', 'f_passanger', 'admin', 'bus_driver','inspector','transport_manager']
        },
        f_passanger:{
            passportID:{
                type:String,
            }
        },
        n_passanger:{
            nationalID:{
                type:String,
            }
        },
        bus_driver:{
            employeeID:{
                type:String,
            },
            NICNo:{
                type:String,
            },
        },
        inspector:{
            employeeID:{
                type:String,
            },
            NICNo:{
                type:String,
            },
        },
        transport_manager:{
            employeeID:{
                type:String,
            },
            NICNo:{
                type:String,
            },
        },
        isVerify:{
            type: String,
            default: false,
        }
    },
    { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;