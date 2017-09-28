angular.module('easyHotel').controller('HotelController', HotelController);

function HotelController($route, hotelDataFactory, $routeParams) {
  var vm = this;
  var id = $routeParams.id;
  hotelDataFactory.hotelDisplay(id).then((response) => {
    vm.hotel = response.data;
    //It need to old a array for the directive ng-reapeat
    vm.stars = _getStartRating(response.data.stars);
  });

  function _getStartRating(stars) {
    return new Array(stars);
  }

  vm.addReview = () => {
    var postData = {
      name: vm.name,
      rating: vm.rating,
      review: vm.review
    };
    if (vm.reviewForm.$valid) {      
      hotelDataFactory.postReview(id, postData).then((response) => {        
        if (response.status === 201) {
          $route.reload();
        }
      }).catch((error) => {
        console.log(error);
      });
    } else {
      vm.isSubmitted = true;
    }
  }

}
