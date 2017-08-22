require('./api/data/db');
var express = require("express");
var app = express();
var path = require("path"); // to be able to get html file in a html method call
var bodyParser = require('body-parser');

var routes = require("./api/routes");

app.set("port", 3000);

/* app.use(function(req, res, next) {
  // utilisation du middleware pour afficher les info concernant la requète doit être avant le call static car il descent le fichier
  console.log(req.method, req.url);
  next();
}); */

app.use(express.static(path.join(__dirname, "public"))); // Will go directly go in public folder and search for html
app.use('/scripts', express.static(__dirname + '/node_modules/angular/'));

// To parse the data in the api routes
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routes); // will look in the api folders for a route folder and then for index.js 

var server = app.listen(app.get("port"), function() {
  var port = server.address().port;
  console.log("Its happening on port: " + port);
});
