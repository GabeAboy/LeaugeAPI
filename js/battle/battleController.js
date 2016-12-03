angular.module('lolApp').controller('battleController',function($scope,$stateParams,battleService) {
  $scope.playerOne = $stateParams.playerOne;
  $scope.playerTwo = $stateParams.playerTwo;

  $scope.getOneSpellsByID = function() {
    battleService.getSpellsByID($scope.playerOne).then(function(data) {
      $scope.playerOneName = data.data.name;
      $scope.playerOneSpells = data.data.spells;

      $scope.oneImgArray = [];
      for (var i = 0; i < $scope.playerOneSpells.length; i++) {
        $scope.oneImgArray.push($scope.playerOneSpells[i].image.full);
      }
    });
  };
  $scope.getTwoSpellsByID = function() {
    battleService.getSpellsByID($scope.playerTwo).then(function(data) {
      $scope.playerTwoName = data.data.name;
      $scope.playerTwoSpells = data.data.spells;
      $scope.twoImgArray = [];
      for (var i = 0; i < $scope.playerTwoSpells.length; i++) {
        $scope.twoImgArray.push($scope.playerTwoSpells[i].image.full);
      }
    });
  };

  $scope.getOneSpellsByID();
  $scope.getTwoSpellsByID();


  $scope.getOneBaseStats = function() {
    battleService.getBaseStats($scope.playerOne).then(function(data) {
      $scope.playerOneStats = data;
    });
  };
  $scope.getTwoBaseStats = function() {
    battleService.getBaseStats($scope.playerTwo).then(function(data) {
      $scope.playerTwoStats = data;
    });
  };

  $scope.getOneBaseStats();
  $scope.getTwoBaseStats();

});


//https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/32?champData=stats&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0
