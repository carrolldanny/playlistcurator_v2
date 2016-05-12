

'use strict';

angular.module('playlistcuratorApp')
  .controller('PlaylistsController', ['$scope','$cookies','$filter','PlaylistsService','checkLoginService',
       function($scope,$cookies,$filter,PlaylistsService,checkLoginService) {
         //causing a page flash as its loading before checking the user is logged in -
         //will leave this for now and re-visit if i have time before its submitted
         checkLoginService.checkLogin(function(data) {});
         PlaylistsService.getPlaylists()
            .success(function(playlists) {
                 $scope.playlists = playlists.filter(function (playlist) {
                    return (playlist.playlist_user_id == $cookies.get('uid'));
                 });
            });


        $scope.deletePlaylist = function(playlist) {
          PlaylistsService.deletePlaylist(playlist._id)
             .success(function(playlists) {
                  var index=$scope.playlists.indexOf(playlist)
                  $scope.playlists.splice(index,1);
             });
        };
}])
