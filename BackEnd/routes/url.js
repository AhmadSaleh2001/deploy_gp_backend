const Router = require("express").Router();
const urlController = require("../controller/urlController");
Router.get("/getAll", urlController.getAll);
Router.post("/add", urlController.add);
module.exports = Router;
