const express = require('express')
const router = express.Router();
const User = require('../models/createuser')

router.get('/', async (req, res) => {
    try {
        const usr = await User.create({
            email: req.body.email,
            password: req.body.password
        })
        if (!usr) return res.status(501).send("Internal server error")
        res.status(200).send({ msg: 'successfully added' })
    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

router.post('/login', async (req, res) => {
    try {
        var usr = await User.findOne({ email: req.body.email })
        if (!usr) return res.status(501).send({ success: false, msg: 'email is false' })
        const passwordcompare = await bcrypt.compare(req.body.password, usr.password)
        if (passwordcompare) {
            return res.status(200).send({ msg: 'successfully added', user: usr.email, password: usr.password, token: usr._id })
        }
        res.status(200).send({ msg: 'successfully added' })
    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

module.exports = router