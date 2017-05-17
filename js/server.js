'use strict';

const mailer = require('./mailer.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

console.log(mailer);

app.use(bodyParser.urlencoded({extended: false}));


app.all('*', function(req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     next();
});

app.get('/', function (request, response) {
    response.send('Hello');
});

app.post('/', function (request, response) {
	response.send(request.body);
	console.log(request.body.User_name);
	console.log(request.body.email);
});

app.listen(3000);
console.log('Open: http://127.0.0.1:3000');
