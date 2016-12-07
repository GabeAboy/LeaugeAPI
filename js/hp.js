angular.module('lolApp').directive('healthCalc', function() {

  return {

    restrict: 'A',
    scope: {
      healthCalc: '='
    },
    link: function(scope, elem, attr) {
      // console.log('ELEMENT',elem);

      scope.$watch('healthCalc', function(newVal) {
        console.log('CHANGED', newVal);
        elem.css('height', newVal +'%');
        console.log('HEALTHCALC',scope.healthCalc);

      });

    }
  };
});



//.directive('introData', function () {
//     return {
//         templateUrl: './views/introData.html',
//         restrict:'AE',
//         controller: function($scope,mainSrv) {
//           $scope.getIntro = mainSrv.getIntro();
//         },
//         link: function(scope,elem,attr) {
//             scope.getIntro.then(function(response) {
//               scope.dataIntro = response;
//             });
//         }
//     };
// });
