const express = require("express");
const router = express.Router();
const UsersController = require("../../controller/UsersController");
const auth = require("../../middlewares/auth")


router.use(auth)
router.post("/", UsersController.Register);
router.post("/login", UsersController.Login);


module.exports = router;
