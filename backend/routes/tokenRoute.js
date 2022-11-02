const { Router } = require("express");
const route = Router();
const tokenController = require("../controllers/tokenController");
const auth = require('../middlewares/auth')

route.post("/api/token/genareteToken", tokenController.genarateToken);
route.post("/api/token/checkToken", tokenController.checkToken);


module.exports = route;