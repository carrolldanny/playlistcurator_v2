'use strict';

 var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

var TrackSchema = new Schema({
    track_id: String,
    track_name: String,
    track_artist_name: String,
    track_image: String,
    track_release_date: {type: Date,default: Date.now},
    track_duration: Number
  });

var PlaylistSchema = new Schema({
  playlist_id: String,
  playlist_curator_name: {type: String, default: '', trim: true, required: 'Curator Name cannot be blank'},
  playlist_user_id: String,
  playlist_name: String,
  playlist_genre: String,
  playlist_create_date: {type: Date,default: Date.now},
  tracks: [TrackSchema]
});

//export default mongoose.model('Playlist', PlaylistSchema);
module.exports = mongoose.model('Playlist', PlaylistSchema);
