const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const connectionString = 'mongodb+srv://sandeepnaik927:Deadlyyt787%40787@cluster0.nwxidfi.mongodb.net/happytrip?retryWrites=true&w=majority';

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


app.get('/', (req, res) => {
  res.send('Server is running');
});

const citiesRouter = require('./routes/cities');
const limitsRouter = require('./routes/limits');

app.use('/cities', citiesRouter);
app.use('/limits', limitsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
