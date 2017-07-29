var hotelData = require('../data/hotel-data.json'); // create json data array

module.exports.hotelsGetAll = function (req, res) {
    console.log("GET the Hotels");
    console.log(req.query);
    // to use with params liek /hotels?offset=2&count=2
    var data = hotelData;
    if (req.query) {
        var offset = 0;
        var count = 5;

        if (req.query && req.query.offset) {
            offset = parseInt(req.query.offset, 10);
        }
        if (req.query && req.query.count) {
            count = parseInt(req.query.count, 10);
        }
        data = hotelData.slice(offset, offset+count);   
    }

    res
        .status(200)
        .json( data );
};

module.exports.hotelsGetOne = function (req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[ hotelId ]; // get data at position "hotelId" in hotelData array 
    console.log("GET hotel with id: " + hotelId);
    res
        .status(200)
        .json( thisHotel );
};

module.exports.hotelsAddOne = function (req, res) {
    console.log("POST new hotel");
    console.log(req.body);
    res
        .status(200)
        .json( req.body );
};