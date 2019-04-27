var express = require('express')
var router = express.Router();

var controller = require("../controller/user.controller.js");

router.get("/", controller.index);

router.get("/create", controller.userCreate);
router.post("/create", controller.userPost);

router.get("/search", controller.userSearch);
router.get("/:id", controller.userDetail);



module.exports = router;