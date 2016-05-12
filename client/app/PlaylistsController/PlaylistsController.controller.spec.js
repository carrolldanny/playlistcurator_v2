'use strict';

describe('Controller: PlaylistsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('playlistcuratorApp.PlaylistsController'));

  var PlaylistsControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaylistsControllerCtrl = $controller('PlaylistsControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
