
// const express = require('express');
// const router = express.Router();
// const City = require('../models/City');

// // GET all cities
// router.get('/', async (req, res) => {
//   try {
//     const cities = await City.find();
//     res.json(cities);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const City = require('../models/City');

// GET all cities
router.get('/', async (req, res) => {
  try {
    console.log('Fetching cities from the database...');
    const cities = await City.find(); // Fetch all cities
    console.log('Cities:', cities);   // Log the data for debugging
    res.json(cities);                 // Send data as JSON response
  } catch (error) {
    console.error('Error fetching cities:', error);
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
