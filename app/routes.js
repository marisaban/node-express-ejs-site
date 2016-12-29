// if you run node server.js on terminal, it will console.log the msg
// but if you go to your localhost:8080, it will say CANNOT GET
// we haven't told it what to do yet

//add our first route
// everytime there is a request for our homepage, we return a response
// which will be a string

// require Express
var express = require('express');
// Node module, creates paths for us
var path = require('path');

// create router object, use express instance
// this will apply all our routes to router instead 
// of entire app. So instead of app = it, it should be router = 
var router = express.Router();

// export our router 
module.exports = router;

//route our app to the root '/' 
// homepage, send the file 
router.get('/', function(req, res){
	res.render('pages/index');
});

// About page will need a GET route
// without any view files, it won't do much 
// Array full of users with 3 objects inside, name, email and avatar
// now we  pass the Array into the view
router.get('/about', function(req, res){
	var users = [
	{ name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/300/300'},
	{ name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/300/300'},
	{ name: 'Bunny', email: 'bunny@scotch.io', avatar: 'http://placekitten.com/300/300'},
	{ name: 'Sally', email: 'sally@scotch.io', avatar: 'http://placekitten.com/300/300'}
	];

	res.render('pages/about', { users: users });
});

// Contact page will need GET route and POST route 
router.get('/contact', function(req, res){
	res.render('pages/contact');
});

// we send back a msg saying, thanks for contacting us
// reply with their name, thanks Name
router.post('/contact', function(req, res){
	res.send('Thanks for contacting us,' + req.body.name+ '! We will respond shortly');
	
});
