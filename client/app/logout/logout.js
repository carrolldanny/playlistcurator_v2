'use strict';

angular.module('playlistcuratorApp')
  .config(function ($routeProvider) {
     $routeProvider
      .when('/logout', {
        templateUrl: 'app/logout/logout.html',
        controller: 'LogoutController'
      });
  });
