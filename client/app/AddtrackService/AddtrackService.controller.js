'use strict';

  angular.module('playlistcuratorApp').factory('AddtrackService', ['$http', function($http){
   var api = {
     getTracks : function(genre, offset) {
        return $http.get('https://api.jamendo.com/v3.0/tracks/?client_id=90be5fa3&format=jsonpretty&limit=12&fuzzytags=' + genre + '&offset=0' + offset);
     }
  }
  return api
}])
