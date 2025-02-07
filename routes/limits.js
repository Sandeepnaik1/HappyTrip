const express = require('express');
const router = express.Router();
const PassengerLimit = require('../models/passengerLimit');

// GET passenger limits
router.get('/', async (req, res) => {
  try {
    const limit = await PassengerLimit.findOne(); // Fetch the limit data from the collection
    if (!limit) {
      return res.status(404).json({ message: 'Passenger limit not found' });
    }

    // Remove the _id field from the response
    const { _id, ...limitWithoutId } = limit.toObject();
    res.json(limitWithoutId); // Send the cleaned response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
});

module.exports = router;
