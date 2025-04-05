const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  type: String,
  description: String,
  location: {
    lat: Number,
    lng: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Alert', alertSchema);
