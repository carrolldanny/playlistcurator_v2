'use strict';

var app = require('../..');
import request from 'supertest';

var newAddtrack;

describe('Addtrack API:', function() {

  describe('GET /api/addtracks', function() {
    var addtracks;

    beforeEach(function(done) {
      request(app)
        .get('/api/addtracks')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          addtracks = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      addtracks.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/addtracks', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/addtracks')
        .send({
          name: 'New Addtrack',
          info: 'This is the brand new addtrack!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAddtrack = res.body;
          done();
        });
    });

    it('should respond with the newly created addtrack', function() {
      newAddtrack.name.should.equal('New Addtrack');
      newAddtrack.info.should.equal('This is the brand new addtrack!!!');
    });

  });

  describe('GET /api/addtracks/:id', function() {
    var addtrack;

    beforeEach(function(done) {
      request(app)
        .get('/api/addtracks/' + newAddtrack._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          addtrack = res.body;
          done();
        });
    });

    afterEach(function() {
      addtrack = {};
    });

    it('should respond with the requested addtrack', function() {
      addtrack.name.should.equal('New Addtrack');
      addtrack.info.should.equal('This is the brand new addtrack!!!');
    });

  });

  describe('PUT /api/addtracks/:id', function() {
    var updatedAddtrack;

    beforeEach(function(done) {
      request(app)
        .put('/api/addtracks/' + newAddtrack._id)
        .send({
          name: 'Updated Addtrack',
          info: 'This is the updated addtrack!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAddtrack = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAddtrack = {};
    });

    it('should respond with the updated addtrack', function() {
      updatedAddtrack.name.should.equal('Updated Addtrack');
      updatedAddtrack.info.should.equal('This is the updated addtrack!!!');
    });

  });

  describe('DELETE /api/addtracks/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/addtracks/' + newAddtrack._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when addtrack does not exist', function(done) {
      request(app)
        .delete('/api/addtracks/' + newAddtrack._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
