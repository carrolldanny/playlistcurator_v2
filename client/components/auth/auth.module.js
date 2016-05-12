'use strict';

angular.module('playlistcuratorApp.auth', [
  'playlistcuratorApp.constants',
  'playlistcuratorApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
