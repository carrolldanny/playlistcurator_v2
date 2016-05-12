'use strict';

/**
 * @ngdoc filter
 * @name playlistcuratorApp.filter:secondsToDateTime
 * @function
 * @description
 * # secondsToDateTime
 * Filter in the playlistcuratorApp.
 */
angular.module('playlistcuratorApp')
  .filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
  }]);
