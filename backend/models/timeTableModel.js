const { Schema, model } = require("mongoose");

const timeTableSchema = new Schema (
    {

    TimeTableID:{
        type: String,
        required: true,
    },
    StartLocation:{
        type: String,
        required: true,
    },
    DestinationLocation:{
        type: String,
        required: true,
    },
    StartingTime:{
        type: String,
        required: true,
    },
    EndTime:{
        type: String,
        required: true,
    },
    BusRegistrationNo:{
        type: String,
        required: true,
    },
}
);

const TimeTable = model("TimeTable",timeTableSchema )

module.exports = TimeTable;