module.exports.createValidate = function(req, res, next){
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
	next(); //chuyển tiếp đến middleware phía sau 
};