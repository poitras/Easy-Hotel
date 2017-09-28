var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';

mongoose.connect(dburl, { useMongoClient: true });

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ', dburl);   
});
mongoose.connection.on('disconnected', function() {
    console.log('Moongode disconnected');   
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ', err);   
});
// fro a ctrl-c event
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGINT)');
        process.exit(0);
    });
});
// For like heroku termination
process.on('SIGTERM', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGTERM)');
        process.exit(0);
    });
});
//for a rs event in with nodemon
process.once('SIGUSR2', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through app termination (SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});

//BRING IN SCHEMA AND MODELS
require('./hotels.model.js');
require('./users.model');
