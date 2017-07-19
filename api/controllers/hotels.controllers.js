var hotelData = require('../data/hotel-data.json'); // create json data array

module.exports.hotelsGetAll = function (req, res) {
    console.log("GET some json");
    console.log(req.query);
    console.log("yololo");
    
    res
        .status(200)
        .json( hotelData );
};

module.exports.hotelsGetOne = function (req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[ hotelId ]; // get data at position "hotelId" in hotelData array 
    console.log("GET hotel with id: " + hotelId);
    res
        .status(200)
        .json( thisHotel );
};