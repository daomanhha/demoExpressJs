var db = require("../db.js");
module.exports.requireLogin= function(req, res, next){
	if(!req.signedCookies.userId){
		res.redirect("/auth/login");
		return;
	}
	var user = db.get("Users").find({id: req.signedCookies.userId}).value();
	if(!user){
		res.redirect("/auth/login");
		return;
	}
	next();
};