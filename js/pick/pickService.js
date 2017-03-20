angular.module('lolApp').service('mainService',function($http,$q) {

  this.getUsers = function() {
  var deferred = $q.defer();
  $http({
      method: 'GET',
    //  /api/lol/{region}/v1.2/champion/{id}
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0'
  }).then(function(response) {
    var resolveArray = [];
    var res = response.data.data;

    for(key in res) {
      resolveArray.push(res[key]);
    }
    deferred.resolve(resolveArray);
  });
  return deferred.promise;
};
this.getBaseStats = function(id) {
var deferred = $q.defer();
$http({
    method: 'GET',

    url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' +id+ '?champData=stats&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0'
}).then(function(response) {
  console.log(response);
  deferred.resolve(response.data.stats);
});
return deferred.promise;
};


});


/*
THIS IS TO GET EACH CHAMP spells image and stats
https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=spells&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0

has id, name , image
https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0

this has base stats
https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/21?champData=stats&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0

just stells
https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/21?champData=spells&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0



*/
