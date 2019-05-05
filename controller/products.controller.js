var db = require("../db.js");
module.exports.productIndex = function(req, res){
	//cart count
	var sessionId = req.signedCookies.sessionId;
	var objCart= db.get("Session").find({id: sessionId}).value().cart || {};
	var countCart = 0;
	for(var i in objCart) countCart+= objCart[i];

	//pagination
	var page = parseInt(req.query.page) || 1; //nếu không ? thì sẽ là trang 1
	var perPage = 8;
	var start = (page - 1) * perPage;
	var end = page * perPage;
	if(page > 2) page=0;
	res.render("products/indexProducts.pug",{
		countCart: countCart,
		Products: db.get("Products").value().slice(start, end),
		prePage: page-1,
		nextPage: page+1
	});


};