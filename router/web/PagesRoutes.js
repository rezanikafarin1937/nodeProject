const express = require("express");
const router = express.Router();
const PagesController = require("../../controller/PagesController");

router.get("/", PagesController.home);

router.get("/about", PagesController.about);

router.get("/create", PagesController.create);

//redirect
router.get("/about-me", PagesController.aboutMe);

//404 page
router.use(PagesController.notFound);

module.exports = router;
