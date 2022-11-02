const { Router } = require("express");
const route = Router();
const tokenController = require("../controllers/tokenController");
const auth = require('../middlewares/auth')

route.post("/api/token/genareteToken", tokenController.genarateToken);


module.exports = route;