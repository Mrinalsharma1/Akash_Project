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
        console.log(req.body.password, " ", usr.password, " ", usr.usertype, " ", usr.name)
        // const passwordcompare = await bcrypt.compare(req.body.password, usr.password)
        if (req.body.password === usr.password) {
            // console.log("hey")
            return res.status(200).send({ msg: 'successfully added', userdetail: usr })
        }
        res.status(200).send({ msg: 'successfully added' })
    } catch (error) {
        res.status(500).send({ error, msg: 'internal server error' })
    }

})

module.exports = router