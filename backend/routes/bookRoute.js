const { Router } = require("express");
const route = Router();
const bookController = require("../controllers/bookController");


route.post("/api/booking", bookController.addBook);
route.get('/api/getAllBook',bookController.getAllBook);










module.exports = route;