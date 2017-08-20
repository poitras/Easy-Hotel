var dbconn = require('../data/dbconnection');
// object id helper to find by id
var ObjectId = require('mongodb').ObjectId;
var hotelData = require('../data/hotel-data.json'); // create json data array

module.exports.hotelsGetAll = function (req, res) {

    // call everytime to get a new one
    var db = dbconn.get();
    // we cache the collection
    var collection = db.collection('hotels');

    // to use with params like /hotels?offset=2&count=2
    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    // use the collection to return a array + in asynchronus none blocking way with toArray();
    // skip for when to start and limit for the number of docs we want
    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err, docs) {
            //console.log('Founds hotels', docs);
            res
                .status(200)
                .json(docs);
        });
};

module.exports.hotelsGetOne = function (req, res) {

    var db = dbconn.get();
    var collection = db.collection('hotels');

    var hotelId = req.params.hotelId;
    console.log("GET hotel with id", hotelId);

    collection
        .findOne({
            _id : ObjectId(hotelId)
        }, function(err, docs) {
            res
                .status(200)
                .json( docs );
        });
};

module.exports.hotelsAddOne = function (req, res) {

    var db = dbconn.get();

    console.log("POST new hotel");
    console.log(req.body);
    res
        .status(200)
        .json( req.body );
};