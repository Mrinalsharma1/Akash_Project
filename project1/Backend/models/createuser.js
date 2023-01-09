const mongoose = require('mongoose')
const { Schema } = mongoose

const CreateUserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    usertype: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }

})
module.exports = mongoose.model('createuser', CreateUserSchema)