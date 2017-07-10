var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function (req, res) {
    console.log("GET some json");
    res
        .status(200)
        .json( hotelData );
};