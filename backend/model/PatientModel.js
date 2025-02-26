const mongoose =require("mongoose");
const Schema= new mongoose.Schema({
    name:String,
    email:String,
    disease:String,
    city:String,
    mobileNo:Number,
    date:String,
    time:String,
    Drid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor"
    }
})

module.exports=mongoose.model("patient",Schema)