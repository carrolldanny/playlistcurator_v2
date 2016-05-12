'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var playlistCtrlStub = {
  index: 'playlistCtrl.index',
  show: 'playlistCtrl.show',
  create: 'playlistCtrl.create',
  update: 'playlistCtrl.update',
  destroy: 'playlistCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var playlistIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './playlist.controller': playlistCtrlStub
});

describe('Playlist API Router:', function() {

  it('should return an express router instance', function() {
    playlistIndex.should.equal(routerStub);
  });

  describe('GET /api/playlists', function() {

    it('should route to playlist.controller.index', function() {
      routerStub.get
        .withArgs('/', 'playlistCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/playlists/:id', function() {

    it('should route to playlist.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'playlistCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/playlists', function() {

    it('should route to playlist.controller.create', function() {
      routerStub.post
        .withArgs('/', 'playlistCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/playlists/:id', function() {

    it('should route to playlist.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'playlistCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/playlists/:id', function() {

    it('should route to playlist.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'playlistCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/playlists/:id', function() {

    it('should route to playlist.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'playlistCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
