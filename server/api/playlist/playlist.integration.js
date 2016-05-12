'use strict';

var app = require('../..');
import request from 'supertest';

var newPlaylist;

describe('Playlist API:', function() {

  describe('GET /api/playlists', function() {
    var playlists;

    beforeEach(function(done) {
      request(app)
        .get('/api/playlists')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playlists = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      playlists.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/playlists', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/playlists')
        .send({
          name: 'New Playlist',
          info: 'This is the brand new playlist!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newPlaylist = res.body;
          done();
        });
    });

    it('should respond with the newly created playlist', function() {
      newPlaylist.name.should.equal('New Playlist');
      newPlaylist.info.should.equal('This is the brand new playlist!!!');
    });

  });

  describe('GET /api/playlists/:id', function() {
    var playlist;

    beforeEach(function(done) {
      request(app)
        .get('/api/playlists/' + newPlaylist._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          playlist = res.body;
          done();
        });
    });

    afterEach(function() {
      playlist = {};
    });

    it('should respond with the requested playlist', function() {
      playlist.name.should.equal('New Playlist');
      playlist.info.should.equal('This is the brand new playlist!!!');
    });

  });

  describe('PUT /api/playlists/:id', function() {
    var updatedPlaylist;

    beforeEach(function(done) {
      request(app)
        .put('/api/playlists/' + newPlaylist._id)
        .send({
          name: 'Updated Playlist',
          info: 'This is the updated playlist!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedPlaylist = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPlaylist = {};
    });

    it('should respond with the updated playlist', function() {
      updatedPlaylist.name.should.equal('Updated Playlist');
      updatedPlaylist.info.should.equal('This is the updated playlist!!!');
    });

  });

  describe('DELETE /api/playlists/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/playlists/' + newPlaylist._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when playlist does not exist', function(done) {
      request(app)
        .delete('/api/playlists/' + newPlaylist._id)
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
