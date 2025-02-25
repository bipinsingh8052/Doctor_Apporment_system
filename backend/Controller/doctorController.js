const modelDoctor=require("../model/DoctorModel")
const signUpPage =async(req,res)=>{
    console.log(req.body);
    const {
        name,
        email,
        mobile,
        city,
        password,
        speciality
      }=req.body;

    try {
        const data =await modelDoctor.create({
            name:name,
        Email:email,
        specailization:speciality,
        mobileNo:mobile,
        city:city,
        password:password
          })
    
        res.status(200).send({msg:"signUp Completed ! "});
    } catch (error) {
        res.status(404).send({msg:"not connected !"})
    }
}

const displayPage=async(req,res)=>{
   try {
    let data =await modelDoctor.find();
    res.status(200).send(data);
   } catch (error) {
    res.status(404).send({msg:"not found"});
   }
}




const loginDoctor=async(req,res)=>{
    // console.log(req.body);
    const { email, password }=req.body;
    try {
        let data = await modelDoctor.findOne({Email:email});
        if(!data){
            res.status(404).send({msg:"Invalid email try again !"})
        }
        if(data.password != password ){
            res.status(404).send({msg:"Invalid password try again !"})
        }
       
        res.status(200).send(data)
        

    
    } catch (error) {
       res.status(404).send({msg:"Not Found"}); 
    }
    
}

const searchPage=async(req,res)=>{
    // console.log(req.body)
    const {option, input}=req.body;
    const options=option;
    const inputs=input;
    console.log(options,inputs)
    try {
        // let data =await modelDoctor.find({options:inputs});
        // console.log(data)
        res.send("okk")
    } catch (error) {
        res.send("error")
    }
    
}

module.exports={
    signUpPage,
    displayPage,
    loginDoctor,
    searchPage
}