'use strict';

describe('Controller: AddtrackServiceCtrl', function () {

  // load the controller's module
  beforeEach(module('playlistcuratorApp.AddtrackService'));

  var AddtrackServiceCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddtrackServiceCtrl = $controller('AddtrackServiceCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
