
'use strict';

  angular.module('playlistcuratorApp').factory('PlaylistDetailService', ['$http', function($http){
   var api = {
     getPlaylist : function(playlist_id) {
       //playlist_id = "5719f8f1916a7cbe25b24a3b";
        return $http.get('/api/playlists/' + playlist_id )
     }
  }
  return api
}])
