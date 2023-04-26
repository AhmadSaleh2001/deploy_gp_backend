const Router = require("express").Router();
const rateController = require("../controller/rateController");
let { isAuth } = require("../helper/Auth");
Router.get("/getAll", isAuth, rateController.getAll);
Router.post("/add", rateController.add);
module.exports = Router;
