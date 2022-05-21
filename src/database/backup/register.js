const express = require('express');
const Register = express.Router();
const userColle = require('../module/user.schema.js');

Register.use(express.json());
Register.use(express.urlencoded({extended:false}));
Register.post('/register',(req,rsp)=>{
	if(req){
		let data = req.body;
		userColle.findOne({'phone':data.phone},(err,result)=>{
			if(result==null&&err==null){
				//找不到
				rsp.status(205).send('注册成功!RegisterSucceed.');
				userColle.create({...data}).then(result=>{
					console.log("插入注册信息成功。Insert succeed.");
					console.log(result);
				}).catch(err=>{
					console.log("Error:");
					console.log(err);
				});
			}else{
				// 找到
				rsp.status(403).send('该手机已经存在或发生位置错误.');
			}
		})
	}
	else{
		rsp.status(400).send('Bad Request.');
	}
})

module.exports = Register;



