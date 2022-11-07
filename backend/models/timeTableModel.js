const { Schema, model } = require("mongoose");

const timeTableSchema = new Schema (
    {

    TimeTableID:{
        type: String,
        required: true,
    },
    Navigation :{
        type: Boolean ,
        required: true
    },
    StartingTime:{
        type: String,
        required: true,
    },
    EndTime:{
        type: String,
        required: true,
    },
    routeNo: String,
    busID: String,
}
);

const TimeTable = model("TimeTable",timeTableSchema )

module.exports = TimeTable;