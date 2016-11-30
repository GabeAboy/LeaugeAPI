angular.module('lolApp').controller('mainCtrl', function($scope, mainService) {
  console.log('fired');
  $scope.getUsers = function() {
    mainService.getUsers();
  };
  $scope.getUsers();
  $scope.name= 'gabe';

});
