'use strict';

angular.module('playlistcuratorApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/createplaylist', {
        templateUrl: 'app/createplaylist/createplaylist.html',
        controller: 'CreatePlaylistController'
      });
  });
