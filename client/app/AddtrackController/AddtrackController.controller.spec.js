'use strict';

describe('Controller: AddtrackControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('playlistcuratorApp.AddtrackController'));

  var AddtrackControllerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddtrackControllerCtrl = $controller('AddtrackControllerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
