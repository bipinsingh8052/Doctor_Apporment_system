const express =require("express");
const { model } = require("mongoose");
const route=express.Router();
const controller =require("../Controller/doctorController");


route.post("/signUp",controller.signUpPage);
route.get("/display",controller.displayPage);

route.post("/loginDoctor",controller.loginDoctor)
route.post("/search",controller.searchPage)


module.exports=route;