const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
    {
        busRouteID: {
            type: String,
            required: true,
            unique: true
        },
        noOfPass: {
            type:Number,
            required: true,
        },
        totalPrice:{
            type: String,
            required: true, 
        },
        bookDate:{
            type: String,
            required: true,
        },
        
    },
{ timestamps: true }
);

const Book = model("Book",bookSchema);

module.exports = Book;