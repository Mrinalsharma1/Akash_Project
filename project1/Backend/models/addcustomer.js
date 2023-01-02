const mongoose = require('mongoose')
const { Schema } = mongoose

const addCustomer = new Schema({
    cname: {
        type: String,
        require: true
    },
    environment: {
        type: String,
        require: true
    },
    component: {
        type: String,
        require: true
    },
    features: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('Customer', addCustomer)