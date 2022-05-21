const express = require('express');
const userCollection = require('../module/user.schema.js');
console.log("Login middleware is using...");
const loginRouter = express.Router();
loginRouter.use(express.json());
loginRouter.use(express.urlencoded({ extended: false }));
loginRouter.post('/login', (req, rsp) => {
	if (req) {
		var data = req.body;
		if (!data.token) {
			userCollection.findOne({ 'phone': data.phone }, (err, result) => {
				if (!result || err) {
					rsp.status(404).send('账号未注册。Not Register.');
				}
				else {
					if (data.password != result.password) {
						rsp.status(401);
						rsp.send("密码错误。Password Error.");
					}
					else {
						// let {_id} = {...result._doc};
						let token = result._id;
						let info = { message: 'Login', token };
						rsp.status(200).send(info);
					}
				}
			})
		}
	}
	else {
		rsp.status(400).send('BadRequest.');
	}
})

module.exports = loginRouter;