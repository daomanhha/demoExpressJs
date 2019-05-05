var db = require("../db.js");
module.exports.addToCart = function(req, res, next){
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;

	if(!sessionId){
		res.redirect("/product ");
		return;
	}
	var count = db.get("Session")
					.find({id: sessionId})
					.get("cart." + productId , 0) //nếu get khôn tìm thấy thì mặc định là 0
	db.get("Session")
		.find({id: sessionId})
		.set("cart." + productId, count + 1)
		.write();

	res.redirect("/product");// Không muốn kick vào addtocart thì chuyển sang trang add
}