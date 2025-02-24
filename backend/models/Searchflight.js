const mongoose = require('mongoose');

const searchFlightSchema = new mongoose.Schema({
  flightNumber: { type: String, required: true },
  airline: { type: String, required: true },
  departureCity: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  departureDateTime: { type: Date, required: true },
  arrivalDateTime: { type: Date, required: true },
  duration: { type: String, required: true },
  classOfTravel: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, default: '' },
},{ collection: 'search Flight' });

const SearchFlight = mongoose.model('SearchFlight', searchFlightSchema, 'searchFlight');

module.exports = SearchFlight;
