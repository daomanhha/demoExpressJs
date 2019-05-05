var express = require('express');
var router = express.Router();
var multer  = require('multer'); //Kiểm tra định dạng gửi lên
var upload = multer({ dest: './public/uploads/' });

var validate = require("../validate/user.validate.js");

var controller = require("../controller/user.controller.js");

router.get("/", controller.index);

router.get("/create", controller.userCreate);
router.post("/create", upload.single('Avatar') , validate.createValidate, controller.userPost); //middleware

router.get("/search", controller.userSearch);
router.get("/:id", controller.userDetail);



module.exports = router;