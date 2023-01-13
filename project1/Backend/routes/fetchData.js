const express = require('express')
const router = express.Router();
const User = require('../models/user')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/project1";

// router.post('/fetchdata', async (req, res) => {
//     try {
//         MongoClient.connect(url, function (err, db) {
//             if (err) throw err;
//             var dbo = db.db("project1");
//             //Find all documents in the customers collection:
//             dbo.collection("TestDataFinal").find({}).toArray(function (err, result) {
//                 if (err) throw err;
//                 res.send(result);
//                 db.close();
//             });
//         });

//     } catch (error) {
//         res.status(500).send({ error, msg: 'internal server error' })
//     }

// })

router.post('/fetchtestdata', async (req, res) => {
    try {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("project1");
            //Find all documents in the customers collection:
            dbo.collection("customers").find({}).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
        });

    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

router.post('/fetchcreateusersdata', async (req, res) => {
    try {
        MongoClient.connect(url, function (err, db) {
            // console.log("hey")
            if (err) throw err;
            var dbo = db.db("project1");
            //Find all documents in the customers collection:
            dbo.collection("createusers").find({}).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
        });

    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

module.exports = router