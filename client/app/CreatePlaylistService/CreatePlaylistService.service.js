//moved this date to the controller as for some reason kept giving error on the .ssuccsss callback - no idea why
// so this is not being used.
'use strict';

  angular.module('playlistcuratorApp').factory('CreatePlaylistService', ['$http', function($http){
   var api = {
     getGenres : function(playlist_id) {
       //playlist_id = "5718f63878f344ec22452a0f";
        //return $http.get('/api/playlists/' + playlist_id )
        var genres = [{name : 'Rock', image:'./images/genre_images/rock.jpg'},
    		   					{name : 'Pop', image:'./images/genre_images/pop.jpg'},
    		   					{name : 'Indie', image:'./images/genre_images/indie.jpg'},
    		   					{name : 'Jazz', image:'./images/genre_images/jazz.jpg'},
    		   					{name : 'Folk', image:'./images/genre_images/folk.jpg'},
    		   					{name : 'Dance', image:'./images/genre_images/dance.jpg'},
    		   					{name : 'Reggae', image:'./images/genre_images/reggae.jpg'},
    		   					{name : 'Punk', image:'./images/genre_images/punk.jpg'},
    		   					{name : 'Hip Hop', image:'./images/genre_images/hip_hop.jpg'},
    		   					{name : 'Country', image:'./images/genre_images/country.jpg'},
    		   					{name : 'Blues', image:'./images/genre_images/blues.jpg'},
    		   					{name : 'Classical', image:'./images/genre_images/classical.jpg'}];

        return genres;
     }
  }
  return api
}])
