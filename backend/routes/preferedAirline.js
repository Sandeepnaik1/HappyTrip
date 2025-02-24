

const express = require('express');
const router = express.Router();
// const City = require('../models/City');
const controllers = require('../Controllers/flightControllers')

router.post('/preferedAirline',controllers.getpreferedAirline)