const mongoose=require("mongoose");
const Schema =new mongoose.Schema({
    name:String,
    Email:String,
    specailization:String,
    mobileNo:Number,
    city:String,
    password:String



})
module.exports=mongoose.model("doctor",Schema);

