'use strict';

angular.module('playlistcuratorApp')
  .config(function ($routeProvider) {
     $routeProvider
      .when('/playlists', {
        templateUrl: 'app/playlist/playlist.html',
        controller: 'PlaylistsController'
      });
  });
