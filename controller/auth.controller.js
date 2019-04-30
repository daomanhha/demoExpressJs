var db = require("../db.js");

module.exports.login = function(req, res){
	res.render("authentication/auth.pug");
};

module.exports.postAuth = function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	var user = db.get("Users").find({email: email}).value(); //obj user
	if(!user){
		res.render("authentication/auth.pug",{
			Errors:[
				"User does not exits"
			]
		});
	return;	
	}
	if(user.password !== password){
		res.render("authentication/auth.pug",{
			Errors:[
				"Wrong password"
			]
		});
	return;	
	}

	res.cookie("userId", user.id);

	res.redirect("/users");
};