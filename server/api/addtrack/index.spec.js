'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var addtrackCtrlStub = {
  index: 'addtrackCtrl.index',
  show: 'addtrackCtrl.show',
  create: 'addtrackCtrl.create',
  update: 'addtrackCtrl.update',
  destroy: 'addtrackCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var addtrackIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './addtrack.controller': addtrackCtrlStub
});

describe('Addtrack API Router:', function() {

  it('should return an express router instance', function() {
    addtrackIndex.should.equal(routerStub);
  });

  describe('GET /api/addtracks', function() {

    it('should route to addtrack.controller.index', function() {
      routerStub.get
        .withArgs('/', 'addtrackCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/addtracks/:id', function() {

    it('should route to addtrack.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'addtrackCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/addtracks', function() {

    it('should route to addtrack.controller.create', function() {
      routerStub.post
        .withArgs('/', 'addtrackCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/addtracks/:id', function() {

    it('should route to addtrack.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'addtrackCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/addtracks/:id', function() {

    it('should route to addtrack.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'addtrackCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/addtracks/:id', function() {

    it('should route to addtrack.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'addtrackCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
