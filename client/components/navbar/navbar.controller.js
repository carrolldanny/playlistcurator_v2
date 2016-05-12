'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      'title': 'New List',
      'link': '/createplaylist'
    },
    {
      'title': 'My Lists',
      'link': '/playlists'
    },
    {
      'title': 'Logout',
      'link': '/logout'
    }];

  isCollapsed = true;
  //end-non-standard

  constructor($location, Auth) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('playlistcuratorApp')
  .controller('NavbarController', NavbarController);
