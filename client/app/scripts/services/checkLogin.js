'use strict';

/**
 * @ngdoc service
 * @name playlistcuratorApp.service:checkLogin
 * @function
 * @description
 * # checkLogin
 * Service in the playlistcuratorApp.
 */

angular.module('playlistcuratorApp')
  .service('checkLoginService', function($cookies,$window) {


	this.checkLogin = function() {
		if (!$cookies.get("uid")) {
			$window.location.href = '/';
		}
	}
});
