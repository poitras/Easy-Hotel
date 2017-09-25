angular.module('myApp').controller('MainController', MainController);

function MainController(PostFactory) {
  var vm = this;

  PostFactory.getAllPosts().then((response) => {
    vm.posts = response;
  });
  
  vm.name = 'Nicolas';
}