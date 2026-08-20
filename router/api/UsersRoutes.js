const express = require("express");
const router = express.Router();
const UsersController = require("../../controller/UsersController");


router.post("/", UsersController.Register);
router.post("/login", UsersController.Login);


module.exports = router;
