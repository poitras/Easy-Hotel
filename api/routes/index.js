var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers');
var ctrlReviews = require('../controllers/reviews.controllers');
var ctrlUsers = require('../controllers/users.controllers');

router
    .route('/hotels')
    .get( ctrlUsers.authenticate, ctrlHotels.hotelsGetAll )
    .post( ctrlHotels.hotelsAddOne );
router
    .route('/hotels/:hotelId')
    .get( ctrlHotels.hotelsGetOne )
    .put( ctrlHotels.hotelsUpdateOne )
    .delete( ctrlHotels.hotelsDeleteOne );

// Review routes
router
    .route('/hotels/:hotelId/reviews')
    .get( ctrlReviews.reviewsGetAll )
    .post( ctrlReviews.reviewsAddOne );
router
    .route('/hotels/:hotelId/reviews/:reviewId')
    .get( ctrlReviews.reviewsGetOne )
    .put( ctrlReviews.reviewsUpdateOne )
    .delete( ctrlReviews.reviewsDeleteOne );

// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

router
  .route('/users/login')
  .post(ctrlUsers.login);

module.exports = router;