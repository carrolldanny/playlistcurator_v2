
var express = require('express');
var controller = require('./playlist.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/:id/tracks', controller.add_track);
router.delete('/:id/', controller.remove_playlist);
router.delete('/:id/track/:track_id', controller.remove_track);

module.exports = router;
