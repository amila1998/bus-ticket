const { Schema, model } = require("mongoose");

const busSchema = new Schema(
    {
        chassieNo: {
            type: String,
            required: true,
            unique: true
        },
        noOfSeat: {
            type:Number,
            required: true,
        },
        type:{
            type: String,
            required: true,
            enum: ['normal', 'semi','ac'] 
        },
        condition:{
            type: String,
            required: true,
        },
        busNumber:{
            type:String,
            required:true,
            unique: true
        }
    },
{ timestamps: true }
);

const Bus = model("Bus",busSchema);

module.exports = Bus;