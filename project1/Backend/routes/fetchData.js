const express = require('express')
const router = express.Router();
const Customers = require('../models/customer')
var url = "mongodb://localhost:27017/project1";

router.post('/fetchtestdata', async (req, res) => {
    try {
        Customers.find({}, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                res.status(200).send(result);
            }
        });
    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }
})

module.exports = router