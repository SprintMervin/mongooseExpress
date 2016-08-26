var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	uid:String,
	username:String,
	createTime:Date,
	lastLogin:Date
});

mongoose.model('User',UserSchema);