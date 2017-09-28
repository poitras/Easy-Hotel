angular.module('easyHotel').controller('RegisterController', RegisterController);

function RegisterController() {
  var vm = this;

  vm.register = () => {
    var user = {
      username: vm.username,
      password: vm.password
    };

    if(!vm.password || !vm.password){
      vm.error = 'Please add a username and password.'
    } else {
      if (vm.password !== vm.passwordRepeat) {
        vm.error = 'Please make sure the passwords match';
      } else {
        $http.post('/api/users/register', user).then((result) => {
          console.log(result);
          vm.message = 'Successful registration, please join';
          vm.error = '';
        }).catch((error) => {
          console.log(error);
        })
      }
    }
  }
}