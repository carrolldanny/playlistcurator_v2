'use strict';

import mongoose from 'mongoose';

var AddtrackSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Addtrack', AddtrackSchema);
