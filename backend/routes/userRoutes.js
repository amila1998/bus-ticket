const { Router } = require("express");
const route = Router();
const userController = require("../controllers/userController");
const authAdminOrTransportManager = require("../middlewares/adminORtransportManager");
const auth = require('../middlewares/auth')


route.post("/api/auth/register", userController.register);
route.post("/api/auth/addUser",auth,authAdminOrTransportManager, userController.register);
route.post("/api/auth/signin", userController.login);
route.get('/api/auth/infor', auth, userController.getUser);
route.post('/api/auth/logout', userController.logout);
route.get('/api/getAllUsers',auth, userController.getAllUsers);

module.exports = route;