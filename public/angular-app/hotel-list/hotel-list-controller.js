angular.module('easyHotel').controller('HotelsController', HotelsController);

function HotelsController(hotelDataFactory) {
  var vm = this;

  vm.title = 'Hotels page';
  hotelDataFactory.hotelList().then((response) => {
    console.log(response);
    
    vm.hotels = response.data;
  });
}