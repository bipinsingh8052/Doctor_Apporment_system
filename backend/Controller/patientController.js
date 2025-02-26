const patientModel =require("../model/PatientModel")
const doctorModel =require("../model/DoctorModel")
const bookingPage =async(req,res)=>{
    console.log(req.body);
    const {
        drid,
        name,
        email,
        disease,
        city,
        mobile,
        date,
        time
      }=req.body;

      try {
        const data =await patientModel.create({
            name:name,
            email:email,
            disease:disease,
            city:city,
            mobileNo:mobile,
            date:date,
            time:time,
            Drid:drid
        });
        res.status(200).send({msg:"Booked your Appoiment"})
        
      } catch (error) {
        res.status(400).send({msg:"server not connected!"})
      }
   
}



const dashboardPage=async(req,res)=>{
    const{ drid }=req.body;
    try {
        const data =await patientModel.find({Drid:drid})
        // console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({msg:"page is not loading"})
    }
    
}


module.exports={
    bookingPage,
    dashboardPage
}