/*
* @Author: duqinzhi
* @Date:   2018-07-19 15:57:55
* @Last Modified by:   duqinzhi
* @Last Modified time: 2018-07-21 09:47:30
*/
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reactKeTang',{ useNewUrlParser: true});

let UserSchema = new mongoose.Schema({
	username:String,
	password:String
});

module.exports = mongoose.model('user',UserSchema);