import { useState } from "react"
import '../css/doctorLogin.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Confi from "../Confi";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { insert } from "../slices/FirstSlice";
export default function DoctorLogin() {
  
    let [login,setlogin]=useState({ });
    let nav=useNavigate();
    let dispatch =useDispatch();
    function inputvalue(e){
     
      const {name,value}=e.target;
      setlogin(values=>({...values,[name]:value}));
    }
    
  
  
    const  FromCheck=async(e)=>{
      e.preventDefault();
      let api=`${Confi}/loginDoctor`;
      try {
        let response =await axios.post(api,login);
        // console.log(response.data);
        toast.success( "successfuly..!!")
        dispatch(insert(response.data))
        nav('/dashboard')

        
      } catch (error) {
        toast.error(error.response.data.msg)
        
      }


    }
   
    const gotToSignUp=()=>{
        nav("/home")
    }
    
    return (
      <>
       <div className="conatiner_login">
          <div className="form">
              <h1>Login</h1>
              <form onSubmit={FromCheck} >
                  <div className="email">
                      <label htmlFor="">Enter Email</label>
                      <input type="email" name='email' placeholder="Enter Email id" onChange={inputvalue} />
                  </div>
                 
                  <div className="password">
                      <label htmlFor="">Enter Password</label>
                      <input type="password" name='password'  placeholder="Enter password" onChange={inputvalue} />
                  </div>
                 
                  <div className="button">
                  <button type="submit"> Sign in</button>
                  <p>Don't have an account? <span onClick={()=>{gotToSignUp()}}>Sign Up</span></p>
                  </div>
              </form>
          </div>
      </div>
      < Toaster/>
      </>
    )
}
