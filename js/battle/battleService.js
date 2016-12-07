angular.module('lolApp').service('battleService',function($http,$q) {

  this.getSpellsByID = function(id) {
  var deferred = $q.defer();
  $http({
      method: 'GET',
    //  /api/lol/{region}/v1.2/champion/{id}
    //https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/34?champData=spells&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0
      url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/'+id+'?champData=spells&api_key=RGAPI-51fc2f7e-849d-4e46-bc7a-546378e4dac0'
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

// angular.element()

this.calc = function(data,manaCost,opp,self) {
  console.log("data",data);
  console.log("manaCost",manaCost);
  console.log("opp",opp);
  console.log("self",self);
    var damage = (Math.floor(data-opp.armor));
    console.log('damage',damage);
    // console.log("Hits",penalty);
     if(damage>0&&self.mp>=manaCost){
      var manaRemain = (Math.floor(((self.mp-manaCost)/self.mp)*100)+5);
      var manaUsed = 100-manaRemain;
      var hpRemain = Math.floor(((self.hp-damage)/self.hp)*100);
      var hpUsed = 100-hpRemain;
      console.log("manaUsed",manaUsed);
      console.log("hpUsed",hpUsed);
      var obj = {
        hp: hpUsed ,
        mana: manaUsed
      };
      console.log(obj);
      return obj;
     }




};


});
