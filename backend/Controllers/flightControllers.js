// controllers/flightController.js
// const Flight = require('../models/flight'); // Ensure this is the correct path
const { Query } = require('mongoose');
const City = require('../models/City');
const ClassOftravel = require('../models/ClassOftravel');
const PreferedAirline = require('../models/preferedAirline')
const SearchFlight = require('../models/Searchflight');

exports.updateFlight = async (req, res) => {
  const flightId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedFlight = await Flight.findByIdAndUpdate(flightId, updatedData, { new: true });

    if (!updatedFlight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    res.status(200).json(updatedFlight); // Send back the updated flight
  } catch (error) {
    console.error('Error updating flight:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCities = async (req, res, next) => {
  try {
    // Mock database query (Replace with actual DB call if needed)
    const cities = await City.find(); //[{'name': 'bengaluru'}];

    res.status(200).json({
      error: false,
      message: 'Cities fetched successfully',
      data: { cities }
    });

  } catch (error) {
    console.error('Database Error:', error); // Log the error for debugging
    res.status(500).json({  // Change 401 to 500 for server errors
      error: true,
      message: 'Error fetching cities',
      data: null
    });
    next(error);
  }
};

exports.getTravelclass = async (req, res, next) => {
  try {
    const travelClass = await ClassOftravel.find()
    
    res.status(200).json({
      error: false,
      message: "ClassOfTravel fetched",
      data: { travelClass }
    })
  }
  catch (error) {
    res.status(500).json({
      error: true,
      message: "Error fetched in ClassOfTravel",
      data: null
    });


    next(error)
  }
}


exports.getpreferedAirline = async (req, res, next) => {
  try {
    console.log("Fetching airline data...");

    const Airline = await PreferedAirline.find();
    // console.log("Fetched airline data:", Airline);

    if (!Airline || Airline.length === 0) {
      console.warn("No airlines found in the database!");
    }

    res.status(200).json({
      error: false,
      message: "preferedAirline fetched",
      data: { Airline }
    });
  } catch (error) {
    console.error("Error fetching preferred airline:", error);

    res.status(500).json({
      error: true,
      message: "Error fetched in preferedAirline",
      data: null
    });

    next(error);
  }
};

  
exports.searchFlight = async (req, res, next) => {
  try {
    const { fromCity, toCity, classOfTravel, airline } = req.body;

    const query = {}; // Start with an empty object

    if (fromCity) query.departureCity = fromCity;
    if (toCity) query.arrivalCity = toCity;
    if (classOfTravel) query.classOfTravel = classOfTravel;
    if (airline) query.airline = airline;

    console.log("Generated Query:", query); 

    const flights = await SearchFlight.find(query); 
    console.log("Flights Found:", flights); 

    if (!flights || flights.length === 0) {
      console.log(" No flights found with query:", query);
      return res.status(200).json({ error: true, message: "No flights found", data: null });
    }

    res.status(200).json({ error: false, message: "Flights found", data: { flights } });

  } catch (error) {
    console.error("🔥 Error fetching flights:", error);
    res.status(500).json({ error: true, message: "Server error", data: null });
    next(error);
  }
};
