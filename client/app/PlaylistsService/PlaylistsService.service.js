
'use strict';

  angular.module('playlistcuratorApp').factory('PlaylistsService', ['$http', function($http){
   var api = {
     getPlaylists : function() {
           return $http.get('/api/playlists')
     },
     addPlaylist : function(playlist) {
          return $http.post('/api/playlists',playlist)
     },
     addTrack : function(track, playlist_id) {
          return $http.post('/api/playlists/' + playlist_id + '/tracks' ,
                            track)
     },
     removeTrack : function(track_id, playlist_id) {
          return $http.delete('/api/playlists/' + playlist_id + '/track/' + track_id ,
                            track_id)
     },
     getPlaylist : function(playlist_id) {
        return $http.get('/api/playlists/' + playlist_id )
     },
     deletePlaylist : function(playlist_id) {
        return $http.delete('/api/playlists/' + playlist_id )
     }
  }
  return api
}])
