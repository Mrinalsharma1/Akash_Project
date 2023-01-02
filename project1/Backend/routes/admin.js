const express = require('express')
const router = express.Router();
const Customer = require('../models/customer')

router.post('/addcustomer', async (req, res) => {
    try {
        const data = req.body;
        if (!data) return res.status(500).send({ error, msg: 'data is not filled' })
        const result = await Customer.create(data)
        if (!result) return res.status(500).send({ error, msg: 'internal server error' })
        res.status(200).send({ success: true, msg: "data added successfully" })
    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

router.delete('/deletecustomer/:id', async (req, res) => {
    try {
        let result = await Customer.findById(req.params.id);
        if (!result) {
            res.status(500).send({ success: false, msg: 'internal server error' })
        }
        result = await Customer.findByIdAndDelete(req.params.id)
        res.status(200).send({ success: true, msg: "data deleted successfully" })
    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

router.put('/archivedcustomer/:id', async (req, res) => {
    try {
        const { Component, Features, Status } = req.body
        let result = await Customer.findById({_id:req.params.id})
        if (!result) {
            return res.status(500).send({ success: false, msg: 'internal server error' })
        }
        const newcustomer = {
            Customer : req.body.Customer,
            Envi : 'Archived',
            Component : Component,
            Features : Features,
            Status : Status
        }
        const response = await Customer.findByIdAndUpdate(req.params.id, { $set: newcustomer }, { new: true })
        if(!response){
            return res.status(500).send({ success:false, msg: 'internal server error not archived' })
        }
        res.status(200).send({ success: true, msg: "data Archived successfully" })
    } catch (error) {
        res.status(500).send({ error: error, msg: 'internal server error' })
        console.log(error)
    }

})

router.put('/updatecustomer/:id', async (req, res) => {
    try {
        const { Envi, Component, Features, Status } = req.body
        let result = await Customer.findById({_id:req.params.id})
        if (!result) {
            return res.status(500).send({ success: false, msg: 'internal server error' })
        }
        const newcustomer = {
            Customer : req.body.Customer.trim(),
            Envi : Envi.trim(),
            Component : Component.trim(),
            Features : Features.trim(),
            Status : Status
        }
        const response = await Customer.findByIdAndUpdate(req.params.id, { $set: newcustomer }, { new: true })
        if(!response){
            return res.status(500).send({ success:false, msg: 'internal server error not archived' })
        }
        res.status(200).send({ success: true, msg: "data Update successfully" })
    } catch (error) {
        res.status(500).send({ error: error, msg: 'internal server error' })
        console.log(error)
    }

})


module.exports = router