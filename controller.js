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
  $scope.lockedIn = false;
  $scope.selectChamp = function(champ) {
    if($scope.lockedIn){
      $scope.playerTwo = champ;//;
    }
    else $scope.playerOne = champ;//.image.full;
  };
  $scope.lockIn = function() {
  if($scope.playerOne) $scope.lockedIn = true;
  //if(player two defined move on to countdown)
  };
  setTimeout(function () {
    console.log($scope.playerTwo);
    console.log($scope.playerOne);
  }, 2000);


});
