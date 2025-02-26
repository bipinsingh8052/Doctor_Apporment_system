import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { show,deleted } from '../slices/FirstSlice';
import '../css/dashboard.css'
import axios from 'axios';
import Confi from '../Confi';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  let[status ,setStatus]=useState(false);
  let [data,setData]=useState([]);
  let nav=useNavigate();
    let dispatch=useDispatch();
    let name =useSelector(state=>state.name.first);
    // console.log(name)
const loading=async()=>{
  let api=`${Confi}/patient/dashboard`;
  try {
    let response =await axios.post(api,{drid:name._id});
    console.log(response.data);
    setData(response.data)
    
  } catch (error) {
    console.log(error.response.data.msg)
    
  }
}
const logout=()=>{

  dispatch(deleted());
  nav("/home")
}

useEffect(()=>{
  if(name.name){
    console.log("okk")
  }
  else{
    nav("/home")
  }
  loading()
},[])
  return (
    <div className='Dashboard'>
      <div className="dasHeader">
        <h1> My Appointment's</h1>
        <button onClick={logout}> Logout</button>
      </div>
      <div className="mainheaderdas">
        <p>Welcome <span> {name.name}</span></p>
      </div>
      <div className="das">
        <div className="maindas">
          <table>
            <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Disease</th>
              <th>City</th>
              <th>Mobile No</th>
              <th>Appointment Time</th>
              <th> Appointment Date</th>
              <th>Action</th>
            </thead>
            <tbody>
             
           {
            data.map((e,index)=>{
              return(
                <tr key={index}>
                  <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.disease}</td>
              <td>{e.city}</td>
              <td>{e.mobileNo}</td>
              <td>{e.time}</td>
              <td>{e.date}</td>
              <td><button>Cancel</button></td>
                </tr>
              )
            })
           }
            
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}
