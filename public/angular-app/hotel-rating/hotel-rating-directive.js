angular.module('easyHotel').directive('hotelRating', hotelRating);
// component vs directive -> component are more like angular 2 gonna work
function hotelRating() {
  return {
    restrict: 'E',
    // track by $index because its all the same object. We could templateUrl to migrate to html file
    template: '<span ng-repeat="star in vm.stars track by $index" class="fa fa-star">{{ star }}</span>',
    bindToController: true,
    controller: 'HotelController',
    controllerAs: 'vm',
    scope: {
      // to pass a object
      stars: '@'
    }
  }
}

// angular.module('easyHotel').component('hotelRating', {
//   bindings: {
//     stars: '='
//   },
//   template: '<span ng-repeat="star in vm.stars track by $index" class="glyphicon glyphicon-star">{{ star }}</span>',
//   controller: 'HotelController',
//   controllerAs: 'vm'
// });