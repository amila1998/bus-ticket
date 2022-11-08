const { Schema, model } = require("mongoose");

const busRouteSchema = new Schema(
    {
        routeNumber: {
            type: String,
            unique: true
        },
        strtlocation: {
            type: String,
            required:true
        },
        desLocation:{
            type:String,
            required:true
        
        },
        buses:[{
            type:String
        }],
        stops:[{
            type:String
        }]
    },
{ timestamps: true }

);

const BusRoute = model("BusRoute", busRouteSchema);

module.exports = BusRoute;