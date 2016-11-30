angular.module('lolApp').service('mainService',function($http,$q) {

  this.getUsers = function() {
  var deferred = $q.defer();
  $http({
      method: 'GET',
    //  /api/lol/{region}/v1.2/champion/{id}
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=spells&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0'
  }).then(function(response) {

    console.log(response);
  });
  return deferred.promise;
};


});
