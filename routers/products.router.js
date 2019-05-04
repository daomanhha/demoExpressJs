var express = require('express');
var router = express.Router();

var Products= require("../controller/products.controller.js");

router.get("/", Products.productIndex);

module.exports = router;