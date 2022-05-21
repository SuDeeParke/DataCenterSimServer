const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTemplate = new Schema({
	name:String,
	username:String,
	email:{
		type:String,
		required:true,
		unique:true,
		validate:{
			validator:(v)=>{
				return v.includes('@')?true:false
			},
			message:'{VALUE} is not a valid email.'
		}
	},
	phone:{
		type:Number,
		unique:true
	},
	birthday:{
		type:Date,
		default:Date.now()
	},
	address:{
		type:String
	},
	password:{
		type:String,
		validate:{
			validator:(v)=>{
				return v.length<=16&&v.length>=6;
			},
			message:"密码无效"
		}
	}
})

const User = mongoose.model('User',userTemplate);

module.exports = User;