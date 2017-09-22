angular.module('myApp')
  .controller('MainController', MainController)
  .controller('AboutController', AboutController);

function MainController($http) {
  var vm = this;

  $http.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    vm.users = response.data;
  });
  
  vm.name = 'Nicolas';
}
function AboutController($http, $routeParams) {
  var vm = this;
  var id = $routeParams.id;

  $http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  .then((response) => {
    vm.post = response.data;
  });
  
}
