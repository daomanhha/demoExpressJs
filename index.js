//dotenv npm
require('dotenv').config();

var express = require("express");
var app = express();
var port = 4500;

var userRouter = require("./routers/user.router.js");
var authRouter = require("./routers/auth.router.js");
var middleWare = require("./middleWare/auth.middleware.js");


//install body-parser
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//install cookie-parser
var cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.SESSION_SECRET));
//install pug
app.set('views', './views');
app.set('view engine', 'pug');



app.get("/", function(req, res){
	res.render("index.pug");//ham render se lay tham so tu thu muc view
});

app.use("/auth", authRouter );
app.use("/users", middleWare.requireLogin , userRouter);//chuyền vào 2 tham số là đuôi sau root và module sẽ kiểm tra trong router tất các các 

app.listen(port,()=>{console.log("Connecting to port: "+port)});
