const connectMongo = require('./db')
const express = require('express')
const { Router } = require("express");
var cors = require('cors')
var app = express()
app.use(express.json())
connectMongo()
const port = 5000
app.use(cors())
app.use('/users',require('./routes/users'))

app.listen(port,()=>{
    console.log(`app is listening on ${port} `)
})