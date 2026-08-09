const express = require("express");
const router = express.Router();
const UsersController = require("../../controller/UsersController");

// router.get("/", UsersController.Register);
router.post("/", UsersController.Register);


module.exports = router;
