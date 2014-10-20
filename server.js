var express = require('express');
var fs = require('fs');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');

var busboy = require('connect-busboy');
var inspect = require('util').inspect;


var path = require('path');
var ejs = require('ejs');


/****************/
var voUtil = require('./voutils');
/****************/
var app = express();



app.use(function(req, res, next){
  
  //console.log("__dirname: "+__dirname);
  // console.log("__filename: "+__filename);
  // console.log(path);
  // console.log('============================');
  // console.log('%s %s', req.method, req.url);
  // console.log(req);
  // console.log(session);
  // console.log('============================');
  next();
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');



/**静态资源声明**/
app.use('/static',express.static(__dirname + '/static'));
app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use('/tpl',express.static(__dirname + '/public/view-template'));
app.use('/src',express.static(__dirname + '/public/src'));
app.use('/',express.static(__dirname + '/public'));

//使用session
app.use(cookieParser('sctalk admin manager'));
//app.use(bodyParser({keepExtensions: true, uploadDir:'/public/upload'}));
app.use(session());
app.use(bodyParser());
app.use(busboy());

// GET /static/javascripts/jquery.js
// GET /static/style.css
// GET /static/favicon.ico





app.get('/',function(req,res){
	res.render('login',{title:'express ejs'});
})

app.get('/auth',function(req,res){
	if(req.session.user){
		res.send(200);
	}else{
		res.send(403);
	}
})

app.get('/home',function(req,res){
	console.log(req.session.user);

	// if(req.session.user){
	// 	res.render('home',{title:'express ejs'});	
	// }else{
	// 	res.render('login',{title:'express ejs'});		
	// }

	res.render('home',{title:'express ejs'});	
	
})
app.post('/login',function(req,res){
	var userInfo = req.body;

	//TODO 
	if(userInfo.username == 'admin' && userInfo.password == 'admin'){
		var status = true,
			code   = 0,
			data   = {},
			msg    = "登录成功";

		req.session.user = {username:"admin",role:"admin"};
		res.send(voUtil.ResponseJson(status,code,data,msg));
	}else{
		res.send(404);
	}
})
app.get('/logout',function(req,res){
	req.session.user = null;
	res.send(200);
})


app.get('/sayhello',function(req,res){
    app.use(express.methodOverride());
    
	res.send("hello world");
});


app.post('/file',function(req,res){


	console.log("============================================================");
	var fstream;
    req.pipe(req.busboy);
    req.busboy.on('file', function (fieldname, file, filename) {

    		console.log(file);
	        console.log("Uploading: " + filename); 
	        fstream = fs.createWriteStream(__dirname + '/files/' + filename);
	        file.pipe(fstream);
	        fstream.on('close', function () {
	            res.send("upload success");
	        });
    });
	console.log("============================================================");
	
})

var server = app.listen(3000,function(){
	console.log(server.address());
	console.log('%s has start on %s',server.address().address, server.address().port);
})