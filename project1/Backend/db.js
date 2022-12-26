const mongoose =  require('mongoose')
mongoose.set('strictQuery', false);
const uri = "mongodb://localhost:27017/project1"
const connectMongo=(()=>{
    mongoose.connect(uri,()=>{
        console.log("data base connected.....")
    })
})

module.exports = connectMongo