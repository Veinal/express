const studentSchema = require('../model/studentSchema');
const MySchema = require('../model/studentSchema');
const Insert = async(req,res)=>{
    try{
        const {name,email,phone,address,age}=req.body;

        let checkphone = await MySchema.findOne({phone});
        if(checkphone){
            console.log("Phone number already exists!! Try with another number");
            return res.status(400).json({errors:"Phone number already exists"})
        }else{
            const data = await new MySchema({name,email,phone,address,age});
            const savedData= await data.save();
            console.log("Insertion successsful")
            res.send({"Insertion success":true,savedData});
        }
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}
const View = async(req,res)=>{
    try{
        const data = await MySchema.find()
        console.log(data)
        res.json(data);
        
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Singleview = async(req,res)=>{
    try{
        let data = await MySchema.findById(req.params.id);
        if(!data){
            console.log("data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }else{
          
            console.log(data);
            res.json(data);
        }
        
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Delete= async(req,res)=>{
    try{
        let data = await MySchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }
        else{
            data = await MySchema.findByIdAndDelete(req.params.id);
            console.log("Data deleted successsfully..");
            res.json({"Success":true,"Deleted Data":data})
        }
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Update = async(req,res)=> {
    const { name,email,phone,address,age } = req.body;
    try{
        const newData  = {}
        if(name){newData.name=name}
        if(email){newData.email=email}
        if(phone){newData.phone=phone}
        if(address){newData.address=address}
        if(age){newData.age=age}

        let data = await studentSchema.findById(req.params.id);
        if(!data){
            console.log("Data not found with this ID");
            return res.status(404).send("Data does not exist with this ID");
        }else{
            data = await studentSchema.findByIdAndUpdate(req.params.id,{$set:newData});
            // console.log("Updated data: "+ data)
            res.json({data});
        }

    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}

const Register = async(req,res)=>{
    try{
        const {name,email,phone,password} = req.body;
        let checkemail = await MySchema.findOne({email});
        if(checkemail){
            console.log("This email already exists!!! Enter different email...")
            return res.status(400).json({error:"email already exists!!!!"});
        }
        else{
            const data = await new MySchema({name, email, phone, password});
            const savedData= await data.save() ;
            console.log("Registration Successful...");
            res.send({"Registration success":true,savedData});
        }
    }
    catch(error){
        console.error("some error occured"+ error)
        res.status(500).json("some internal error!!!")
    }
}
module.exports={Insert,View,Singleview,Delete,Update,Register};