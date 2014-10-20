var mongoose = require('mongoose');

var Schema = mongoose.Schema;

console.log(Schema);

var UserSchema = new Schema({
	username:String,
	password:String,
	create_time: { type: Date, default: Date.now}
});



var UserModel = mongoose.model('users',UserSchema);

var user = new UserModel({
	username:'jacobdong',
	password: 'abc123'
});

mongoose.connect('mongodb://localhost:27017/ptdocs');


function save(){
	user.save(function(err,doc){
		console.log(err);
		console.log(doc);
	})
}

function find(){
	UserModel.find(function(err,docs){
		console.log(err);
		console.log(docs);
	})
}

find();
