const { Router } = require("express");
const route = Router();

const timetableController = require("../controllers/timetableController");

route.post("/api/timetable/add", timetableController.addTimetable);
route.put("/api/timetable/update/:id", timetableController.editTimetable);
route.delete("/api/timetable/delete/:id", timetableController.deleteTimetable);
route.get("/api/timetable/", timetableController.getAll);
route.get("/api/timetable/:id", timetableController.getOne);
route.get("/api/getDetailsForBusBook/:id", timetableController.getDetailsForBusBook);

module.exports = route;