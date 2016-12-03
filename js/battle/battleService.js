angular.module('lolApp').service('battleService',function($http,$q) {

  this.getSpellsByID = function(id) {
  var deferred = $q.defer();
  $http({
      method: 'GET',
    //  /api/lol/{region}/v1.2/champion/{id}
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' +id+ '?champData=spells&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0'
  }).then(function(response) {
    console.log(response.data.spells);
    deferred.resolve(response);
  });
  return deferred.promise;
};

this.getBaseStats = function(id) {
var deferred = $q.defer();
$http({
    method: 'GET',

    url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' +id+ '?champData=stats&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0'
}).then(function(response) {
  deferred.resolve(response.data.stats);
});
return deferred.promise;
};


});
