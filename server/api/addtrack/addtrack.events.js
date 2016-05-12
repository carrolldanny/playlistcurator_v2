/**
 * Addtrack model events
 */

'use strict';

import {EventEmitter} from 'events';
import Addtrack from './addtrack.model';
var AddtrackEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AddtrackEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Addtrack.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AddtrackEvents.emit(event + ':' + doc._id, doc);
    AddtrackEvents.emit(event, doc);
  }
}

export default AddtrackEvents;
