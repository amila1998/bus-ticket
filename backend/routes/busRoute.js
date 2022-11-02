const { Router } = require("express");
const route = Router();
const busController = require("../controllers/busController");
const auth = require('../middlewares/auth')


route.post("/api/bus/register", busController.addBus);
route.get('/api/getAllBus',busController.getAllBus);
route.get('/api/getOneBus/:id',busController.getOneBus);
route.delete('/api/deleteBus/:id',busController.deleteBus);
route.put('/api/editBus/:id',busController.editBus);


module.exports = route;