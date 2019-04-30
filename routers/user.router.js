var express = require('express');
var router = express.Router();

var validate = require("../validate/user.validate.js");

var controller = require("../controller/user.controller.js");

router.get("/", controller.index);

router.get("/create", controller.userCreate);
router.post("/create", validate.createValidate, controller.userPost); //middleware

router.get("/search", controller.userSearch);
router.get("/:id", controller.userDetail);



module.exports = router;