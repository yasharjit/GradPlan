const express = require('express');
const port = 8000;
const path = require('path');

const app = express();

app.use('/public', express.static('public'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));


app.listen(port, function(err){
	if(err){
		console.log('Error in running server ', err);
		return;
	}
	console.log('Express server is running on port: ', port);
});

app.get('/', function(req, res){
	return res.render('index', {
		title: "GradPlan: Home "
	});
});
app.get('/login', function(req, res){
	return res.render('login', {
		title: "GradPlan: Login"
	});
});
app.get('/signup', function(req, res){
	return res.render('signup', {
		title: "GradPlan: Signup"
	});
});