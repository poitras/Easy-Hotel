var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Hotel = mongoose.model('Hotel');


var runGeoQuery = function(req, res) {
    var lng = parseFloat(req.query.lng);
    var lat = parseFloat(req.query.lat);

    // A geoJSON point
    var point = {
        type : "Point",
        coordinates : [lng, lat]
    };
    var geoOptions = {
        spherical : true,
        maxDistance : 2000,
        num : 5
    };

    Hotel
        .geoNear(point, geoOptions, function(err, results, stats) {
            console.log('Geo results', results);
            console.log('Geo stat', stats);
            res
                .status(200)
                .json(results);           
        });
};
module.exports.hotelsGetAll = function (req, res) {

    // to use with params like /hotels?offset=2&count=2
    var offset = 0;
    var count = 10;

    if (req.query && req.query.lat && req.query.lng) {
        runGeoQuery(req, res);
        return;
    }

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    Hotel
        .find()
        .skip(offset)
        .limit(count)
        .exec(function(err, hotels) {
            console.log('Found hotels', hotels.length);
            res
                .json(hotels);           
        });
};

module.exports.hotelsGetOne = function (req, res) {
    var hotelId = req.params.hotelId;
    console.log("GET hotel with id", hotelId);

    Hotel
        .findById(hotelId)
        .exec(function(err, hotel) {
            res
                .status(200)
                .json( hotel );
        });
};

module.exports.hotelsAddOne = function (req, res) {

    var db = dbconn.get();
    var collection = db.collection('hotels');
    // to parse the data from the request and make it accepted data
    var newHotel;

    console.log("POST new hotel");

    if (req.body && req.body.name && req.body.stars) {

        var newHotel = req.body;
        newHotel.stars = parseInt(req.body.stars, 10);
        
        collection.insertOne(newHotel, function(err, response) {
            console.log(response.ops);
            res
                .status(201)
                .json( response.ops );
        });

    } else {
        console.log('Data missing from body');
        res
            .status(400)
            .json({message : "Required data missing from body"});    
    }
};