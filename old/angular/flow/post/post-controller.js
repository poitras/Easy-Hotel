angular.module('myApp').controller('PostController', PostController);

function PostController(PostFactory, $routeParams) {
  var vm = this;
  var id = $routeParams.id;

  PostFactory.getOnePost(id).then((response) => {
    vm.post = response;
  });
  
}