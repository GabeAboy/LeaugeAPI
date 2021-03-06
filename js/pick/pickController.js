angular.module('lolApp').controller('mainCtrl', function($scope, mainService,$state) {

  $scope.getUsers = function() {
//gets called on load and serves the champion ng-repeat
    mainService.getUsers().then(function(data) {
      $scope.chars = data;
    });
  };
  $scope.getUsers();
  // $scope.name= champ;
  $scope.lockedIn = false;

  $scope.selectChamp = function(champ) {

    $scope.selectedData = mainService.getBaseStats(champ.id)
    console.log($scope.selectedData);
    if($scope.playerTwo && !$scope.lockedIn)return;

    if($scope.lockedIn){
      $scope.playerTwo = champ;//;
    }
    else {
        $scope.playerOne = champ;
    }
  };
  $scope.lockIn = function() {
  if($scope.playerOne) $scope.lockedIn = !$scope.lockedIn;
  if($scope.playerOne && $scope.playerTwo){
    setTimeout(function () {
      $state.transitionTo('battle',{playerOne:$scope.playerOne.id,playerTwo:$scope.playerTwo.id});
    }, 1000);

  }
  //if(player two defined move on to countdown)
  };






});
