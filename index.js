const express = require('express')
const {hello,hello1,operations} =require('./demo');
const connectToMongo =require('./db');
const MySchema = require('./model/crud')
const app = express();
app.use(express.json());
app.use('/api/student',require('./router/studentRoute'))

app.get('/first',(req,res)=>{
    console.log("Your API has been called");
    res.send("This is my first API call");
})

app.post('/api/insert',async(req,res)=>{
    try{
        const {name,email,phone,address}=req.body;
        const data = new MySchema({name,email,phone,address});
        // const data = new MySchema({name:name1,email,phone,address}); if we have different name in the front end
        const savedData = await data.save()
        res.send({"Insertion Success":true,savedData})
    }
    catch(error){
        console.error("some internal error"+error)
        res.status(500).json("Some internal error!!!")
    }
})


app.get('/one',(req,res)=>{
    const time = new Date().toLocaleTimeString()
    const date = new Date().toLocaleDateString()
    // res.send(`today time ${time}, today date ${date}`)
    res.send("date "+ date + " time " + time)
    console.log("date and time")
})
port = 7000;
hello()
hello1("veinal")
operations()
app.listen(port,()=>{
    console.log("App is listening on port number"+ port);
    console.log(`App is listening on port number ${port}`);
})

connectToMongo()
