angular.module('lolApp').directive('healthCalc', function() {
  return {
    restrict: 'A',
    scope: {
      healthCalc: '='
    },
    link: function(scope, elem, attr) {
      scope.$watch('healthCalc', function(newVal) {
        console.log('If im here, $scope.-- used in html changed');
        elem.css('height', newVal +'%');
      });
    }
  };
});
