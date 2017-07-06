var express = require('express');
var app = express();
var path = require('path'); // to be able to get html file in a html method call

app.set('port', 3000);

app.get('/', function (req, res) { //req = request, res = response
    console.log("GET the home page");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public', 'index.html')); // Les systeme appelant décideront comment monter le path
});

app.get('/json', function (req, res) {
    console.log("GET some json");
    res
        .status(200)
        .json({ "jsonData" : true });
});

app.get('/file', function (req, res) {
    console.log("GET a html page");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
   console.log("Its happening on port: " + port); 
});

