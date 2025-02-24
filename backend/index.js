const express=require("express");
const bodyParser =require("body-parser");
const cors=require("cors");
const app =express();
require("dotenv").config();
const mongoose =require("mongoose");
const router =require("./Router/Router")


app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())



mongoose.connect(process.env.DBConnect).then(()=>{
    console.log("Connected the server");
})
.catch(()=>{
    console.log("Not connected Db")
})



let port =process.env.PORT||9090;
app.use("/Doctor",router)

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})