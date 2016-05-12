'use strict';

describe('Service: PlaylistsService', function () {

  // load the service's module
  beforeEach(module('playlistcuratorApp.PlaylistsService'));

  // instantiate service
  var PlaylistsService;
  beforeEach(inject(function (_PlaylistsService_) {
    PlaylistsService = _PlaylistsService_;
  }));

  it('should do something', function () {
    expect(!!PlaylistsService).toBe(true);
  });

});
