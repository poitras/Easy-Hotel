var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers');

router
    .route('/hotels')
    .get( ctrlHotels.hotelsGetAll );
router
    .route('/hotels/:hotelId')
    .get( ctrlHotels.hotelsGetOne );

module.exports = router;