angular.module('myApp', ['ngRoute']).config(config);

function config($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/main.html',
    controller: 'MainController',
    controllerAs: 'vm'
  }).when('/about/:id', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController',
    controllerAs: 'vm'
  }).when('/404', {
    templateUrl: 'templates/404.html'
  }).otherwise({
    redirectTo: '/404'
  });
}