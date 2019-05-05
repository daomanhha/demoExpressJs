var db = require("../db.js");
var shortid = require('shortid');
//Body-parser phai nam o ngoai index
module.exports.index = function(req, res){
	res.render("users/indexUser.pug",{
		Users: db.get("Users").value() //return array
	});
};
module.exports.userCreate = function(req, res){
	res.render("users/userCreate.pug");
};
module.exports.userPost = function(req, res){
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.split("\\").slice(1).join("/") ;
	db.get("Users").push(req.body).write();
	res.redirect("/users");
};
module.exports.userDetail = function(req, res){
	var id = req.params.id; 
	res.render("users/userView.pug",{
		user: db.get("Users").find({id: id}).value() // return obj dau tien tim duoc
	});
	
};
module.exports.userSearch = function(req, res){
	var q = req.query.q;
	var matchedUser = db.get("Users").value().filter( x=>{
		return x.name.indexOf(q) !== -1;
	});
	res.render("users/userSearch",{
		Users: matchedUser
	});
};