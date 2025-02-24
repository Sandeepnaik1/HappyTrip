const mongoose = require("mongoose")

const preferedAirlineSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    }
})
const PreferedAirline = mongoose.model('preferedAirline', preferedAirlineSchema, 'preferedAirline');
module.exports=PreferedAirline