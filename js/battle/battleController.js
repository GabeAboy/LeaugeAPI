angular.module('lolApp').controller('battleController',function($scope,mainService,$stateParams) {
  $scope.playerOne = $stateParams.playerOne;
});
