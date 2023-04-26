const Router = require("express").Router();
const adminController = require("../controller/adminController");
Router.post("/login", adminController.login);
Router.get("/refresh", adminController.refresh);
Router.get("/logout", adminController.logout);
module.exports = Router;
