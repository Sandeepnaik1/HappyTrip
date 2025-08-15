// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const connectionString = 'mongodb+srv://sandeepnaik927:Deadlyyt787%40787@cluster0.nwxidfi.mongodb.net/happytrip?retryWrites=true&w=majority';

// mongoose.connect(connectionString)
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// const searchFlightRoutes = require('./routes/Searchflight');  // ✅ Use route
// const Router = require('./Controllers/flightControllers');

// app.use('/searchFlight', Router.searchFlight);  // ✅ FIXED: Using correct router

// app.use('/cities', Router.getCities);
// app.use('/TravelClass', Router.getTravelclass);
// app.use('/preferedAirline', Router.getpreferedAirline);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path'); // ✅ Added

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const connectionString = 'mongodb+srv://sandeepnaik927:Deadlyyt787%40787@cluster0.nwxidfi.mongodb.net/happytrip?retryWrites=true&w=majority';

// mongoose.connect(connectionString)
//   .then(() => console.log('Connected to MongoDB Atlas'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// const searchFlightRoutes = require('./routes/searchflight');
// const flightControllers = require('./Controllers/flightControllers');

// try {
//   app.use('/searchflight', searchFlightRoutes);  
//   app.use('/cities', flightControllers.getCities);
//   app.use('/TravelClass', flightControllers.getTravelclass);
//   app.use('/preferedAirline', flightControllers.getpreferedAirline);
// } catch (error) {
//   console.error('Route error:', error);
// }

// // ✅ Serve Angular build
// app.use(express.static(path.join(__dirname, 'public')));

// // ✅ Angular routing fallback
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Example API route
app.get("/api/flights", (req, res) => {
  res.json({ message: "Flights API working!" });
});

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
