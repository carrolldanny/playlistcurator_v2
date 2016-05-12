/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Playlist from '../api/playlist/playlist.model';

 Playlist.find({}).remove(function() {
      Playlist.create(  {
        playlist_id : 'ACDBSHFKS123567',
        playlist_curator_name:   'Joe Bloggs',
        playlist_user_id: 'dandare@eircom.net',
        playlist_name: 'Funky House Playlist - March 17th 2016',
        playlist_genre: 'Dance',
        playlist_create_date: 1461150905,
        tracks : [{
                            track_id : '1045558',
                            track_name : 'House Every Weekend',
                            track_artist_name : 'David Zowie',
                            track_image : 'http://ichef.bbci.co.uk/images/ic/256x256/p02qhpk5.jpg',
                            track_release_date : 1461150905,
                            track_duration : 280
                  },
                  {
                            track_id : '1203734',
                            track_name : 'Around the World',
                            track_artist_name : 'Daft Punk',
                            track_image : 'http://ichef.bbci.co.uk/images/ic/256x256/p02qhpk5.jpg',
                            track_release_date : 1461150906,
                            track_duration : 322
                  },
                  {
                            track_id : '1203735',
                            track_name : 'Easy Lover',
                            track_artist_name : 'Phil Collins/Phillip Bailey',
                            track_image : 'http://ichef.bbci.co.uk/images/ic/256x256/p02qhpk5.jpg',
                            track_release_date : 1461150907,
                            track_duration : 247
                  }
                  ]
      });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    }, {
      provider: 'local',
      name: 'Daniel Carroll',
      email: 'dandare@eircom.net',
      password: 'ynnadc1'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
