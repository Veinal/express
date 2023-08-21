const mongoose =require('mongoose')
const mongoURL ="mongodb://127.0.0.1/crud";
const connectToMongo = async() =>{
    try{
        await mongoose.connect(mongoURL)
        console.log("Connected to Mongo successful");
    }
    catch(err){
        console.log("connect to mongo unsuccessful",err);
    }
}
module.exports=connectToMongo;