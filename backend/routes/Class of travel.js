const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/flightControllers'); // ✅ Ensure path is correct

// Define route for fetching travel classes
router.get('/TravelClass', controllers.getTravelclass);

module.exports = router; // ✅ Fix misplaced `module.exports`
