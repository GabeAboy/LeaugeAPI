angular.module('lolApp').controller('mainCtrl', function($scope, mainService) {
  console.log('fired');
  $scope.getUsers = function() {

    mainService.getUsers().then(function(data) {
      console.log(data);
      $scope.chars = data;
    });
  };
  $scope.getUsers();
  // $scope.name= champ;

  $scope.selectChamp = function(champ) {
    console.log(champ);

  };


});
