const mongoose = require('mongoose')
const { Schema } = mongoose

const customer = new Schema({
    
    Customer: {
        type: String,
        require: true
    },
    Envi: {
        type: String,
        require: true
    },
    Component: {
        type: String,
        require: true
    },
    Features: {
        type: String,
        require: true
    },
    Status: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Customer', customer)