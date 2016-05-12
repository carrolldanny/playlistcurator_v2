'use strict';

describe('Service: PlaylistDetailService', function () {

  // load the service's module
  beforeEach(module('playlistcuratorApp.PlaylistDetailService'));

  // instantiate service
  var PlaylistDetailService;
  beforeEach(inject(function (_PlaylistDetailService_) {
    PlaylistDetailService = _PlaylistDetailService_;
  }));

  it('should do something', function () {
    expect(!!PlaylistDetailService).toBe(true);
  });

});
