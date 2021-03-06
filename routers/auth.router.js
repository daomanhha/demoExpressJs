var express = require('express');
var router = express.Router();

var controller = require("../controller/auth.controller.js");

router.get("/login", controller.login);
router.post("/login", controller.postAuth);

module.exports = router;