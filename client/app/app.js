'use strict';

angular.module('playlistcuratorApp', [
  'playlistcuratorApp.auth',
  'playlistcuratorApp.admin',
  'playlistcuratorApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngNotify',
  'ui.bootstrap',
  'angular-confirm',
  '720kb.socialshare',
  'validation.match'
])
  .config(function($routeProvider, $locationProvider) {
      $routeProvider
      .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
