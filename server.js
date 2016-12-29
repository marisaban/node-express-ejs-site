/* 
//import the http module 
var http = require('http');
// handle sending requests and returning responses
function handleRequest(req, response){
	// return string 
	response.end('Hello World');
}

// create the server 
	var server = http.createServer(handleRequest);
// start the server and listen on some specified port
server.listen(8080, function(){
	console.log('listening on port 8080');
});

*/

// Creating a server using Express 

// installed via npm, require it 
var express 		= require('express');
var expressLayouts 	= require('express-ejs-layouts');
var bodyParser 		= require('body-parser');
var app 			= express();
var port 			= 8080;

// use ejs and express layouts, use express layouts first
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use bodyParser and you want to use the urlencoded method which
// parses urlencoded bodies
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// then load whatever other pages 
// tell the server where to look for our routes
var router = require('./app/routes');
//express middleware function, has access to all our requests 
// and response objects. 
app.use('/', router);


// set static files (css and images) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function(){
	console.log('app started');
});





