angular.module('lolApp').service('battleService',function($http,$q) {

  this.getSpellsByID = function(id) {
  var deferred = $q.defer();
  $http({
      method: 'GET',
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
  console.log("Damage of key pressed: ",data);
  console.log("manaCost of key Pressed: ",manaCost);
  console.log("opponent data: ",opp);
  console.log("caster: ",self);
    var damage = (Math.floor(data-opp.armor));
    console.log('damage after reducing opponent\'s resistence ',damage);
    // console.log("Hits",penalty);
     if(damage>0&&self.mp>=manaCost){
      var manaRemain = (Math.floor(((self.mp-manaCost)/self.mp)*100)+5);
      var manaUsed = 100-manaRemain;
      var hpRemain = Math.floor(((self.hp-damage)/self.hp)*100);
      var hpUsed = 100-hpRemain;
      console.log("Caster manaUsed in percent: ",manaUsed);
      console.log("Opponent hp taken in percent: ",hpUsed);
      var obj = {
        hp: hpUsed ,
        mana: manaUsed
      };
      console.log("services return object of manaUsed, hpLost",obj);
      return obj;
     }




};


});
