const express=require("express");
const route =express.Router();
const patientContollor=require("../Controller/patientController")
route.post("/appoiment",patientContollor.bookingPage)

route.post("/dashboard",patientContollor.dashboardPage)

module.exports=route;