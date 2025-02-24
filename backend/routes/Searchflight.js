const express = require('express');
const router = express.Router();
const controllers = require('../Controllers/flightControllers');  // ✅ Fixed path

router.post('/', controllers.searchFlight);

module.exports = router;
