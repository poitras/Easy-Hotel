var fs = require('fs');

var onFireLoad = function (err, file) {
    console.log("Got the file");
};

console.log("Going to get the file");
fs.readFile('readFileSync.js', onFireLoad);

console.log("App continuess...");



