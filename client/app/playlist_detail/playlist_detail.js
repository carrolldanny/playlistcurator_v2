'use strict';

angular.module('playlistcuratorApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/playlist_detail/:_id', {
        templateUrl: 'app/playlist_detail/playlist_detail.html',
        controller: 'PlaylistDetailController'
      });
  });
