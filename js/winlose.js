angular.module('lolApp').controller('winlose',function($scope,$stateParams,battleService,$rootScope,$document,$state){
  $scope.winner =  $stateParams.winner;
  $scope.loser =  $stateParams.loser;
});
