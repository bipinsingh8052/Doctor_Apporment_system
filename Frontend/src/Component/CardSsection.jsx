import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import '../css/card.css'
import axios from 'axios'
import Confi from '../Confi';
import toast, { Toaster } from 'react-hot-toast';

export default function CardSsection() {
  let[data,setData]=useState([]);

  let loading=async()=>{
    let api=`${Confi}/display`
    try {
      let resp= await axios.get(api);
      // console.log(resp.data)
      setData(resp.data);
      
    } catch (error) {
      toast.error(error.response.data.msg)
      
    }
  }
  useEffect(()=>{loading()},[])
  return (
    <>
    <div className="all_carts">
   {
    data.map((e,index)=>{
      return(

        <div className='card_container' key={index}>
    
          <div className="cart_left">
          
            <h5><span>Dr</span> {e.name}</h5>
            <h6>{e.specailization}</h6>
            <p><span><IoMdCall/></span> {e.mobileNo}</p>
            <p> <span><HiOutlineMailOpen/></span>{e.Email}</p>
            <p><span><FaLocationDot/></span>{e.city}</p>
          </div>
          <div className="cart_right">
          </div>
        </div>
      )
    })
   }
    </div>
      <Toaster/>
  </>
  )
}
