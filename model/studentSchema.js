const mongoose = require('mongoose')
const {Schema}= mongoose;
const MySchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("student",MySchema)