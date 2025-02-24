const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// module.exports = mongoose.model('Flights', FlightSchema);