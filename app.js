var express = require('express');
var app = express();
var path = require('path'); // to be able to get html file in a html method call

var routes = require('./api/routes');

app.set('port', 3000);

app.use(function (req, res, next) {    // utilisation du middleware pour afficher les info concernant le requète doit être avant le call static car il descent le fichier
    console.log(req.method, req.url);
    next();   
});

app.use(express.static(path.join(__dirname, 'public'))); // Will go directly in public folder and search for html

app.use('/api', routes); // will look in the routes folder for any routes avec / but could be use like '/api'

var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
   console.log("Its happening on port: " + port); 
});