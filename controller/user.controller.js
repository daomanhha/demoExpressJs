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
	var Errors= [];
	if(!req.body.name){
		Errors.push("required name");
	}
	if(!req.body.age){
		Errors.push("required age");
	}
	if(!req.body.phone){
		Errors.push("required phone");
	}
	if(Errors.length){ //truthy and falsy
		res.render("users/userCreate.pug",{
			Errors: Errors,//Nếu tồn tại obj này thì trong file pug gọi if Erros để kiểm tra
			values: req.body
		});
		return; //không muốn gọi lệnh phía sau break
	} 
	db.get("Users").push(req.body).write();
	res.redirect("/");
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