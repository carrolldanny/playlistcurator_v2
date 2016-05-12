'use strict';

describe('Controller: PlaylistDetailControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('playlistcuratorApp.PlaylistDetailController'));

  var PlaylistDetailControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaylistDetailControllerCtrl = $controller('PlaylistDetailControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
