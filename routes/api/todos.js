const router = require("express").Router();
const todoController = require("../../controller/todoController");

router.route("/").get(todoController.findAll);

module.exports = router;
