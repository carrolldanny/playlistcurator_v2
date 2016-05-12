'use strict';

angular.module('playlistcuratorApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/addtrack', {
        templateUrl: 'app/addtrack/addtrack.html',
        controller: 'AddtrackController'
      });
  });
