const BusRoute = require("../models/busRouteModel");

const busRouteController = {
    addBusRoute: async (req, res) => {
        try {
            const { routeNumber, strtlocation, desLocation } = req.body;

            // check fields
            if (!routeNumber || !strtlocation || !desLocation)
                return res
                    .status(400)
                    .json({ message: "Please fill in all fields." });

            // check bus route
            const exBusRoute = await BusRoute.findOne({ routeNumber });
            if (exBusRoute)
                return res
                    .status(400)
                    .json({ message: "This Bus Route is already Registered in our system." });

            const newBusRoute = new BusRoute({
                routeNumber,
                strtlocation,
                desLocation
            });

            await newBusRoute.save();

            res.status(200).json({
                msg: "Bus Route Added Success ! ",
                success: true,
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }

    },

    getAllBusRoutes: async (req, res) => {
        try {
            const fetch = await BusRoute.find();

            res.status(200).json({
                msg: "Bus Routes Fetched Success ! ",
                fetch : fetch ,
                success: true,
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }
    } ,

    getABusRoute: async (req, res) => {
        try {
            let busRouteId = req.params.id ;
            const fetch = await BusRoute.findById(busRouteId);

            res.status(200).json({
                msg: "Bus Route Fetched Success ! ",
                fetch : fetch ,
                success: true,
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }
    } ,

    deleteBusRoute : async (req, res) => {
        try {

            await BusRoute.findByIdAndDelete(req.params.id);

            res.status(200).json({
                msg: "Bus Route Deleted Success ! ",
                success: true,
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }
    },

    editBusRoute : async ( req , res ) => {
        try {

            let busRouteId = req.params.id ;
            const { routeNumber, strtlocation, desLocation  } = req.body;

            const newEditBusRoute = {
                routeNumber,
                strtlocation,
                desLocation
            };

            await BusRoute.findByIdAndUpdate(busRouteId, newEditBusRoute);

            res.status(200).json({ 
                msg: "Bus Route Updated Successfully !" ,
                success: true,  
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }
    } ,
}

module.exports = busRouteController;