const Book= require("../models/bookModel");
const bookController={
    addBook:async(req,res)=>{
        try {
            const {busRouteID,noOfPass,totalPrice,bookDate} = req.body;
            // console.log("🚀 ~ file: BusController.js ~ line 6 ~ addBus:async ~ busNumber", busNumber)
            // let date_ob = new Date();

            // check bus 
            // const exBus = await Bus.findOne({ busNumber });
            // if (exBus)
            //     return res
            //         .status(400)
            //         .json({ message: "This Bus is already Registered in our system." });

        
            const newBook= new Book({
                busRouteID,noOfPass,totalPrice,bookDate
            })
           const submitNew = await newBook.save();  
            res.status(200).json({ 
                msg:"Booking Successfully " ,
                success: true
            })     
        } catch (error) {
            res.status(500).json({ 
                msg: error.message ,
                success: false
            });
        }
    },
    getAllBook:async(req,res)=>{
        try {
            // let BusId = req.params.id ;
            const AllBook = await Book.find();
            res.status(200).json({ 
                AllBook,
                success: true
            })                
        } catch (error) {
            res.status(500).json({ 
                msg: error.message ,
                success: false
            }); 
        }
    },
}
module.exports = bookController;