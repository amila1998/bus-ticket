const { Schema, model } = require("mongoose");

const tokenSchema = new Schema(
    {
        tokenID: {
            type: String,
            required: true,
            unique: true
        },
        user_NIC_No: {
            type: String,
        },
        expiredDate:{
            type:Date, 
        },
        totalAmount:{
            type:Number,
            defalt:0
        },
        tokenType:{
            type:String,
            required:true
        
        }
    },
{ timestamps: true }
);

const Token = model("Token", tokenSchema);

module.exports = Token;