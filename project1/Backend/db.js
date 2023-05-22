const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const uri = "mongodb://localhost:27017/project1"
// const connectMongo = (() => {
//     mongoose.connect(uri, {useNewUrlParser: true},() => {
//         console.log("data base connected.....")
//     })
// })

const connectMongo = (async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/project1').then(() => console.log('connected..')).
        catch(error => console.log('error'));

})



module.exports = connectMongo

// const mongoose = require('mongoose')
// mongoose.set('strictQuery', false);
// const uri = "mongodb://localhost:27017/project1"
// const connectMongo = (() => {
//     mongoose.connect(uri, () => {
//         console.log("data base connected.....")
//     })
// })

// module.exports = connectMongo