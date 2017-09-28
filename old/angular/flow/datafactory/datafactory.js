angular.module('myApp').factory('PostFactory', PostFactory);

function PostFactory($http) {
  return {
    getAllPosts: getAllPosts,
    getOnePost: getOnePost
  };

  function getAllPosts() {
    return $http.get('https://jsonplaceholder.typicode.com/posts').then(complete).catch(failed);
  }

  function getOnePost(id){
    return $http.get('https://jsonplaceholder.typicode.com/posts/' + id).then(complete).catch(failed);
  }

  function complete(response) {
    return response.data;
  }

  function failed(error){
    return error.statusText;
  }
}