angular.module('lolApp').service('mainSrv',function($http,$q) {
  this.getIntro = function() {
    return $http({
      method:'GET',
      url:'./js/intro.json'
    }).then(function(response) {
      return response.data;
    });
  };
});
