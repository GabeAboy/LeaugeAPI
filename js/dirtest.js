angular.module('lolApp').directive('introData', function () {
    return {
        templateUrl: './views/introData.html',
        restrict:'AE',
        controller: function($scope,mainSrv) {
          $scope.getIntro = mainSrv.getIntro();
        },
        link: function(scope,elem,attr) {
            scope.getIntro.then(function(response) {
              scope.dataIntro = response;
            });
        }
    };
});
