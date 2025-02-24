
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
const controllers = require('../Controllers/flightControllers')

// GET all cities
router.get('/cities', controllers.getCities);
 
module.exports = router;