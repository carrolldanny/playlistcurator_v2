'use strict';

class LoginController {
  constructor(Auth, $location, $cookies) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$location = $location;
    this.$cookies = $cookies;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        this.$cookies.put("uid", this.user.email);
        this.$location.path('/playlists');
      })
      .catch(err => {
        this.errors.other = err.message;
      });
    }
  }
}

angular.module('playlistcuratorApp')
  .controller('LoginController', LoginController);
