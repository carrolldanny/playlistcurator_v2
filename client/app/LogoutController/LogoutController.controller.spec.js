'use strict';

describe('Controller: LogoutControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('playlistcuratorApp.LogoutController'));

  var LogoutControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogoutControllerCtrl = $controller('LogoutControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
