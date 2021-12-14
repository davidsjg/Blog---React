const router = require("express").Router();
const todoRoutes = require("./todos");

// Destination routes
router.use("/todos", todoRoutes);

module.exports = router;
