// controllers/flightController.js
const Flight = require('../models/flight'); // Ensure this is the correct path

exports.updateFlight = async (req, res) => {
  const flightId = req.params.id; // Get flight ID from URL parameters
  const updatedData = req.body; // Get updated flight data from the request body

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
