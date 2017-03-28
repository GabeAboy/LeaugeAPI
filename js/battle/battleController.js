angular.module('lolApp').controller('battleController',function($scope,$stateParams,battleService,$rootScope,$document,$state) {
  var playerOne = $stateParams.playerOne;
  var playerTwo = $stateParams.playerTwo;
  var oneSpellInfo = {};
  var twoSpellInfo = {};
  var playerTwoStats;
  var playerOneStats;
  var obj;
  $scope.firstHp = {hp: 100};
  $scope.firstMana = {mana:100};
  $scope.secondHp={hp:100};
  $scope.secondMana={mana:100};
  //$scope.healthCalc = 100;

$scope.printThis = function() {
  console.log('hello world');
}

setInterval(function () {

}, 1000);
function checkThis() {
  console.log('checked');
      if($scope.firstHp.hp<=0 || $scope.secondHp.hp<=0){
        $scope.firstHp = {hp: 100};
        $scope.firstMana = {mana:100};
        $scope.secondHp={hp:100};
        $scope.secondMana={mana:100};

        console.log("FINISH");
        if($scope.firstHp.hp<=0)$state.transitionTo('win',{winner:$scope.playerTwoName,loser:$scope.playerOneName});
        else $state.transitionTo('win',{winner:$scope.playerOneName,loser:$scope.playerTwoName});
      }
  console.log($scope.firstHp.hp);
  console.log($scope.firstMana.mana);
  if($scope.firstHp.hp<100)$scope.firstHp.hp+=5
  if($scope.firstMana.mana<100)$scope.firstMana.mana+=5
  if($scope.secondHp.hp<100)$scope.secondHp.hp+=5
  if($scope.secondMana.mana<100)$scope.secondMana.mana+=5
}
  $scope.getOneSpellsByID = function() {

    battleService.getSpellsByID(playerOne).then(function(data) {
      $scope.playerOneName = data.data.name;
      var playerOneSpells = data.data.spells;
      var oneCostArray = [];
      var oneCdArray = [];
      var oneEffectArray = [];

      for (var r = 0; r < playerOneSpells.length; r++) {
        oneEffectArray.push(playerOneSpells[r].effect[1]);
      }
      for (var i = 0; i < playerOneSpells.length; i++) {
        oneCdArray.push(playerOneSpells[i].cooldownBurn.split("/"));
      }
      for (var j = 0; j < playerOneSpells.length; j++) {
        oneCostArray.push(playerOneSpells[j].costBurn.split("/"));
      }
      $scope.oneImgArray = [];
      for (var n = 0; n < playerOneSpells.length; n++) {
        $scope.oneImgArray.push(playerOneSpells[n].image.full);
      }
      oneSpellInfo.cd = oneCdArray;
      oneSpellInfo.cost = oneCostArray;
      oneSpellInfo.dmg = oneEffectArray;
    });
  };
  $scope.getTwoSpellsByID = function() {
    battleService.getSpellsByID(playerTwo).then(function(data) {
      $scope.playerTwoName = data.data.name;
      var playerTwoSpells = data.data.spells;
      var twoCostArray=[];
      var twoCdArray = [];
      var twoEffectArray=[];

      for (var y = 0; y < playerTwoSpells.length; y++) {
        twoEffectArray.push(playerTwoSpells[y].effect[1]);
      }
      for (var j = 0; j < playerTwoSpells.length; j++) {
        twoCostArray.push(playerTwoSpells[j].costBurn.split("/"));
      }
      for (var i = 0; i < playerTwoSpells.length; i++) {
        twoCdArray.push(playerTwoSpells[i].cooldownBurn.split("/"));
      }

      $scope.twoImgArray = [];
      for (var n = 0; n < playerTwoSpells.length; n++) {
        $scope.twoImgArray.push(playerTwoSpells[n].image.full);
      }

      twoSpellInfo.cd = twoCdArray;
      twoSpellInfo.cost = twoCostArray;
      twoSpellInfo.dmg = twoEffectArray;
    });
  };


  setTimeout(function () {
    console.log(oneSpellInfo);
    console.log(twoSpellInfo);
  }, 3000);
  $scope.getOneSpellsByID();
  $scope.getTwoSpellsByID();


  $scope.getOneBaseStats = function() {
    battleService.getBaseStats(playerOne).then(function(data) {
      playerOneStats = data;
      $scope.oneHp = [];
      for (var i = 0; i < Math.floor(playerOneStats.hp); i++) {
        $scope.oneHp.push(i);
      }
    });
  };
  $scope.getTwoBaseStats = function() {
    battleService.getBaseStats(playerTwo).then(function(data) {
      playerTwoStats = data;
    });
  };

  $scope.getOneBaseStats();
  $scope.getTwoBaseStats();

  $document.bind('keypress',function(e) {
    $rootScope.$broadcast('keypress',e,String.fromCharCode(e.which));
  });
  var qIsPressed = false;
  var wIsPressed = false;
  var eIsPressed = false;
  var rIsPressed = false;
  var uIsPressed = false;
  var iIsPressed = false;
  var oIsPressed = false;
  var pIsPressed = false;
  $rootScope.$on('keypress',function(e,a,key) {
    // playerOneStats.mp+=playerOneStats.mpregen;
    // playerTwoStats.mp+=playerTwoStats.mpregen;

    switch (a.key) {

      case "q":
        if(!qIsPressed) {
          console.log("HITQ");
          qIsPressed = true;
          $scope.$apply(function() {
            let obj =  battleService.calc(oneSpellInfo.dmg[0][0],oneSpellInfo.cost[0][0],playerTwoStats,playerOneStats);
            console.log('obj',obj);
            $scope.secondHp.hp-=obj.hp;
            $scope.firstMana.mana-=obj.mana;
          });

          setTimeout(function() {
            console.log(playerTwoStats.hp);
            qIsPressed = false;

          }, oneSpellInfo.cd[0][0]*10);
        }
        break;
      case "w":
      if(!wIsPressed) {
        console.log("w");
        wIsPressed = true;

        $scope.$apply(function() {
          let obj =  battleService.calc(oneSpellInfo.dmg[1][0],oneSpellInfo.cost[1][0],playerTwoStats,playerOneStats);
          $scope.secondHp.hp-=obj.hp;
          $scope.firstMana.mana-=obj.mana;
        });

        setTimeout(function() {
          wIsPressed = false;

        }, oneSpellInfo.cd[1][0]*1000);
      }
        break;
      case "e":
      if(!eIsPressed) {
        console.log("e");
        eIsPressed = true;
        $scope.$apply(function() {
          let obj =  battleService.calc(oneSpellInfo.dmg[2][0],oneSpellInfo.cost[2][0],playerTwoStats,playerOneStats);
          $scope.secondHp.hp-=obj.hp;
          $scope.firstMana.mana-=obj.mana;
        });

        setTimeout(function() {
          eIsPressed = false;
        }, oneSpellInfo.cd[2][0]*1000);
      }
        break;
      case "r":
      if(!rIsPressed) {
        console.log("r");
        rIsPressed = true;
        $scope.$apply(function() {
          let obj =  battleService.calc(oneSpellInfo.dmg[3][0],oneSpellInfo.cost[3][0],playerTwoStats,playerOneStats);
          $scope.secondHp.hp-=obj.hp;
          $scope.firstMana.mana-=obj.mana;
        });


        setTimeout(function() {
          rIsPressed = false;
        }, oneSpellInfo.cd[3][0]*1000);
      }
        break;
        /////
          case "u":
            console.log(!uIsPressed);
            if(!uIsPressed) {
              console.log("u");
              uIsPressed = true;
              //$scope.firstHp.hp-=
            $scope.$apply(function() {
              let obj = battleService.calc(twoSpellInfo.dmg[0][0],twoSpellInfo.cost[0][0],playerOneStats,playerTwoStats);
              $scope.firstHp.hp-=obj.hp;
              $scope.secondMana.mana-=obj.mana;
            });
              setTimeout(function() {
                uIsPressed = false;

              }, twoSpellInfo.cd[0][0]*1000);
            }
            break;
            case "i":
              if(!iIsPressed) {
                console.log("i");
                iIsPressed = true;
              $scope.$apply(function() {
                let obj = battleService.calc(twoSpellInfo.dmg[1][0],twoSpellInfo.cost[1][0],playerOneStats,playerTwoStats);
                $scope.firstHp.hp-=obj.hp;
                $scope.secondMana.mana-=obj.mana;
              });
                setTimeout(function() {
                  iIsPressed = false;

                }, twoSpellInfo.cd[1][0]*1000);
              }
              break;
              case "o":
                if(!oIsPressed) {
                  console.log("o");
                  oIsPressed = true;
                $scope.$apply(function() {
                  let obj = battleService.calc(twoSpellInfo.dmg[2][0],twoSpellInfo.cost[2][0],playerOneStats,playerTwoStats);
                  console.log(obj,'sdfsdfsdfsdfsdf');
                  $scope.firstHp.hp-=obj.hp;
                  $scope.secondMana.mana-=obj.mana;
                });
                  setTimeout(function() {
                    oIsPressed = false;

                  }, twoSpellInfo.cd[2][0]*1000);
                }
                break;
                case "p":
                  if(!pIsPressed) {
                    console.log(".p");
                    pIsPressed = true;
                  $scope.$apply(function() {
                    let obj = battleService.calc(twoSpellInfo.dmg[3][0],twoSpellInfo.cost[3][0],playerOneStats,playerTwoStats);
                    console.log(obj,"asdasdasdasd");
                    $scope.firstHp.hp-=obj.hp;
                    $scope.secondMana.mana-=obj.mana;});
                    setTimeout(function() {
                      pIsPressed = false;

                    }, twoSpellInfo.cd[3][0]*1000);
                  }
                  break;
      default:
        console.log("Failed to press valid keypress");

    }
  });
  setInterval(function () {
    checkThis()
  }, 1000);
});
