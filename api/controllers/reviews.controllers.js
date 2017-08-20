var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Hotel = mongoose.model('Hotel');

// GET all reviews for a hotel
module.exports.reviewsGetAll = function(req, res) {
    var hotelId = req.params.hotelId;
    console.log('GET hotelId', hotelId);
    
    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, hotel) {            
            res
                .status(200)
                .json( hotel.reviews );
        });
};

// GET single review for a hotel
module.exports.reviewsGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;
    //console.log('GET reviewId ' + reviewId + " for hotelId " + hotelId);
    
    Hotel
        .findById(hotelId)
        .select("reviews")
        .exec(function(err, hotel) {
            var review = hotel.reviews.id(reviewId);
            res
                .status(200)
                .json( review );
        });
    
    
};