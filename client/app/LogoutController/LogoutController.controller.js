'use strict';

angular.module('playlistcuratorApp')
  .controller('LogoutController', function ($scope, $location, $cookies) {
    console.log('logging out');
    $cookies.remove("uid");
    $location.path('/');
  });
