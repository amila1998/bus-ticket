const { Router } = require("express");
const route = Router();
const userController = require("../controllers/userController");
const auth = require('../middlewares/auth')


route.post("/api/auth/register", userController.register);
route.post("/api/auth/signin", userController.login);
route.get('/api/auth/infor', auth, userController.getUser);
route.post('/api/auth/logout', userController.logout);

module.exports = route;