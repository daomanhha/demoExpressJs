var db = require("../db.js");
var shortid = require('shortid');
module.exports = function(req, res , next){
	if(!req.signedCookies.sessionId){
		var sessionId = shortid.generate();
		res.cookie("sessionId", sessionId, {
		signed: true
	});
		db.get("Session").push({id: sessionId}).write();
	}

	next();


}