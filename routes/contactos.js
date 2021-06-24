const express = require("express");
const router = express.Router();

const controllers = require("../controllers/contactosControllers");

router.get("/", controllers.list);
router.get("/add", controllers.windowsave);
router.post('/add', controllers.save);
router.get('/update/:id', controllers.edit);
router.get('/delete/:id', controllers.delete);
router.post('/update/:id', controllers.update);

module.exports = router;
