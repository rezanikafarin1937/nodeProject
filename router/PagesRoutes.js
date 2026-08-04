const express = require('express')
const router = express.Router()
const PagesController = require('../../src/controller/pagesController')


// console.log(__dirname);
// console.log(path.join(__dirname, "../views/index.html"));

router.get('/',  PagesController.home)

router.get('/about',PagesController.about )

router.get('/create',PagesController.create )

//redirect
router.get('/about-me', PagesController.aboutMe)

//404 page 
router.use((req,res)=>{
     res.sendFile(path.join(__dirname, "../views/404.html"));

})

module.exports = router;
