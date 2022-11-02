const { Router } = require("express");
const busRouteController = require("../controllers/busRouteController");
const route = Router();

route.post("/api/addBusRoute" , busRouteController.addBusRoute);
route.get("/api/getAllBusRoutes" , busRouteController.getAllBusRoutes);
route.delete("/api/deleteBusRoute/:id" , busRouteController.deleteBusRoute);
route.put("/api/editBusRoute/:id" , busRouteController.editBusRoute);
route.get("/api/getABusRoute/:id" , busRouteController.getABusRoute) ;

module.exports = route;