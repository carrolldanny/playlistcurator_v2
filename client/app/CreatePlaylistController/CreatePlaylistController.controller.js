

'use strict';

angular.module('playlistcuratorApp')
.controller('CreatePlaylistController', ['$scope','CreatePlaylistService','$location','checkLoginService',

     function($scope,CreatePlaylistService,$location,checkLoginService) {
       //get the playlist _id from the URL
        //console.log($location.id);
        //var pId = $location.path().split("/")[2]||"Unknown";    //path will be /person/show/321/, and array looks like: ["","person","show","321",""]
        //console.log(pId);
        checkLoginService.checkLogin(function(data) {});
        CreatePlaylistService.getGenres('571a0b20f7fa0f06273aead6')
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

        $scope.genres = genres;
        $scope.pageTitle = "Select your new playlist's genre";
}])
