const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   }
}, { collection: 'Class of Travel' }); // Explicit collection name with spaces

module.exports = mongoose.model('ClassOfTravel', ClassSchema);
