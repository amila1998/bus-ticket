const Bus= require("../models/busModel");
const busController = {
    addBus:async(req,res)=>{
        try {
            const {chassieNo,noOfSeat,type,condition,busNumber} = req.body;
            // console.log("🚀 ~ file: BusController.js ~ line 6 ~ addBus:async ~ busNumber", busNumber)
            // let date_ob = new Date();
            const newBus = new Bus({
                chassieNo,noOfSeat,type,condition,busNumber
            })
           const submitNew = await newBus.save();  
            res.status(200).json({ 
                msg:"Bus added Successfully " ,
                success: true
            })     
        } catch (error) {
            res.status(500).json({ 
                msg: error.message ,
                success: false
            });
        }
    },
    getAllBus:async(req,res)=>{
        try {
            // let BusId = req.params.id ;
            const AllBus = await Bus.find();
            res.status(200).json({ 
                AllBus,
                success: true
            })                
        } catch (error) {
            res.status(500).json({ 
                msg: error.message ,
                success: false
            }); 
        }
    },
    getOneBus:async(req,res)=>{
        try {
            let BusId = req.params.id ;
            const OneBus = await Bus.findOne({"_id":BusId});
            res.status(200).json({ 
                OneBus,
                success: true
            })                
        } catch (error) {
            res.status(500).json({ 
                msg: error.message ,
                success: false
            }); 
        }
    },
    deleteBus : async (req, res) => {
        try {
            const fetch = await Bus.findByIdAndDelete(req.params.id);


            res.status(200).json({
                msg: "Bus Deleted Success ! ",
                success: true,
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }
    },
    editBus : async ( req , res ) => {
        try {

            let BusId = req.params.id ;
            const {chassieNo,noOfSeat,type,condition,busNumber} = req.body;

            const newEditBus = {
                chassieNo,noOfSeat,type,condition,busNumber
            };

            const fetch = await Bus.findByIdAndUpdate(BusId,newEditBus);

            res.status(200).json({ 
                msg: "Update success." ,
                fetch : fetch    
            });

        } catch (error) {
            res.status(500).json({
                msg: error.message,
                success: false
            });
        }
    }, 


}

module.exports = busController;