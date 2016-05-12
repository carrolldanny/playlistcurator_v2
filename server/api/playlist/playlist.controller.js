var _ = require('lodash')
    var Playlist = require('./playlist.model');

    function handleError(res, err) {
      return res.send(500, err);
    }

    exports.index = function(req, res) {
        Playlist.find(function (err, playlists) {
            if(err) { return handleError(res, err); }
            return res.json(200, playlists);
        });
    } ;
    exports.create = function(req, res) {
      req.body.tracks = []
      Playlist.create(req.body, function(err, playlist) {
          if (err) { return handleError(res, err); }
          return res.json(201, playlist);
       });
    };

     exports.show = function(req, res) {
      Playlist.findById(req.params.id, function (err, playlist) {
          if(err) { return handleError(res, err); }
          return res.json(200, playlist);
      });
  } ;

  // Add a track to a playlist
  exports.add_track = function(req, res) {
     Playlist.findById(req.params.id, function (err, playlist) {

            var track = {
                track_id: req.body.track_id,
                track_name: req.body.track_name,
                track_artist_name: req.body.track_artist_name,
                track_image: req.body.track_image,
                track_release_date: req.body.track_release_date,
                track_duration: req.body.track_duration
             }
            playlist.tracks.push(track)
            playlist.save(function (err) {
              if(err) { return handleError(res, err); }
              var last = _.last(playlist.tracks)
              if (last != undefined) {
                 return res.json(200, last);
              } else {
                return res.send(500,"Database error")
                 }
            });
      });
  };


  // Remove a playlist
  // exports.remove_track = function(req, res) {
  //   //Playlist.findById(req.params.id, function (err, playlist) {
  //     Playlist.findByIdAndUpdate(req.params.id, {
  //         '$pull': {
  //             'tracks':{ 'track_id': req.params.track_id }
  //         },
  //         function(err, org) {
  //           return res.json(200, ord);
  //         });
  //
  //     });
  //   //});
  // };
  exports.remove_track = function(req, res) {
    //var name = req.params.name;
    return Playlist.findOneAndUpdate(
      {_id: req.params.id},
      {$pull: {tracks: {track_id: req.params.track_id}}},
      function(err, org) {
        return res.json(200, org);
      });
  };

  /////////////////////////////////////////////

  // Remove a playlist
  exports.remove_playlist = function(req, res) {
    Playlist.findByIdAndRemove(req.params.id)
      .exec()
      .then(function(doc) {
        return res.json(200, doc);
    }).catch(function(error) {
        return res.json(500, error);
    });
  };
