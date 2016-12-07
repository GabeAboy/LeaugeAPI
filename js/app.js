angular.module('lolApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home',{
              url:'/',
              templateUrl: "index.html"
          })
          .state('intro',{
            url:"/intro",
            templateUrl:"../views/intro.html"
          })
          .state('pick',{
              url:'/pick',
              templateUrl: "../views/pick/champPick.html"
          })
          .state('battle',{
              url:'/battle/:playerOne/:playerTwo',
              templateUrl: "../views/battle/battleArena.html",
              controller: "battleController"
          })
          .state('win',{
              url:'/win/:winner/:loser',
              templateUrl: "../views/victory/victoryBoard.html",
              controller: "winlose"

          });

        $urlRouterProvider
            .otherwise('/intro');
    });
