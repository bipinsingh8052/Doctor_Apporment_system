const modelDoctor=require("../model/DoctorModel")
const signUpPage =async(req,res)=>{
    console.log(req.body);

    res.send("okk");
}

const displayPage=async(req,res)=>{
    console.log("okk");
    res.send("okkk");
}


module.exports={
    signUpPage,
    displayPage,
}