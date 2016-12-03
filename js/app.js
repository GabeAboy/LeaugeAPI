angular.module('lolApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home',{
              url:'/',
              templateUrl: "index.html"
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
              url:'/win',
              templateUrl: "../views/victory/victoryBoard.html",

          });

        $urlRouterProvider
            .otherwise('/');
    });
