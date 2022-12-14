const TimeTable = require("../models/timeTableModel")
const Bus = require("../models/busModel")
const BusRoute = require("../models/busRouteModel")

const timetableController = {

    addTimetable: async(req,res) =>{
        try {
            const {TimeTableID , routeNo , Navigation ,StartingTime , EndTime ,busID} = req.body;

            const newTimetable = new TimeTable({
                TimeTableID , routeNo , Navigation ,StartingTime,EndTime,busID
            })
            const submitNew = await newTimetable.save();
            res.status(200).json({
                msg: "Time Table Added Successfully",
                success: true
            })
        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
        });
    }
},

editTimetable: async(req, res) => {
    try {
        let TID = req.params.id;
        const {TimeTableID , routeNo , Navigation ,StartingTime , EndTime ,busID} = req.body;

        const neweditTimetable = {
            TimeTableID , routeNo , Navigation ,StartingTime,EndTime,busID
        };

        const fetch = await TimeTable.findByIdAndUpdate(TID, neweditTimetable)
        
        res.status(200).json({
            msg: "Time Table Updated Successfully",
            fetch: fetch
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message,
            success: false
    });
    }
},

deleteTimetable: async(req, res) => {
    try {
        const fetch = await TimeTable.findByIdAndDelete(req.params.id);

        res.status(200).json({
            msg: "Time Table Deleted Successfully",
            fetch: true
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message,
            success: false
    });
}
},

getAll: async(req, res) => {
    try {
        const AllTimetables = await TimeTable.find();

        res.status(200).json({
            AllTimetables,
            success: true
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message,
            success: false
    });
    }
},

getOne:async(req,res)=>{
    try {
        let TimetableId = req.params.id ;
        const OneTimetables = await TimeTable.findOne({"_id":TimetableId});
        res.status(200).json({ 
            OneTimetables,
            success: true
        })                
    } catch (error) {
        res.status(500).json({ 
            msg: error.message ,
            success: false
        }); 
    }
},
getDetailsForBusBook:async(req,res)=> {
    try {
        let TimetableId = req.params.id ;
        const OneTimetables = await TimeTable.findOne({"_id":TimetableId});
        const busDetails = await Bus.findOne({'busNumber':OneTimetables.busID})
        const busRouteDetails = await BusRoute.findOne({'routeNumber':OneTimetables.routeNo})
        res.status(200).json(
            {OneTimetables,busDetails,busRouteDetails}
            
        )                
    } catch (error) {
        res.status(500).json({ 
            msg: error.message ,
            success: false
        }); 
    }
}
}
module.exports = timetableController;