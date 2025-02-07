const mongoose = require('mongoose');

const passengerLimitSchema = new mongoose.Schema({
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  infants: { type: Number, required: true }
});

module.exports = mongoose.model('PassengerLimit', passengerLimitSchema);
