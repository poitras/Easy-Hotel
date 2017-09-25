angular.module('myApp').filter('reverse', reverse);

function reverse() {
  return (string) => {
    if(string) {
      return string.split('').reverse().join('');
    }
  }
}