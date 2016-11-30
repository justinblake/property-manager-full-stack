var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var propertySchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    address: {
        streetAddress: String,
        city: String,
        state: String,
        zip: Number
    },
    squareFeet: Number,
    bedrooms: Number,
    bathrooms: Number,
    kitchen: String,
    entertainment: String,
    wifi: Boolean,
    backyard: String,
    extras: String,
    imgUrl: String
});

module.exports = mongoose.model('Property', propertySchema);
