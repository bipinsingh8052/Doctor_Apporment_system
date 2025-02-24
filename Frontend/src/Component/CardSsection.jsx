import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import '../css/card.css'
import axios from 'axios'


export default function CardSsection() {
  let[data,setData]=useState([]);

  let loading=async()=>{
    let api=""
    try {
      let resp= await axios.get(api);
      console.log(resp)
      
    } catch (error) {
      console.log("erroe")
      
    }
  }
  useEffect(()=>{loading()},[])
  return (
    <>
    <div className="all_carts">
    <div className='card_container'>
    
    <div className="cart_left">
    
      <h5><span>Dr</span> Bipin singh</h5>
      <h6>tyuiojhvbnmkjhg</h6>
      <p><span><IoMdCall/></span> 1324567890</p>
      <p> <span><HiOutlineMailOpen/></span>email</p>
      <p><span><FaLocationDot/></span>city</p>
     
     
    </div>
    <div className="cart_right">

</div>
    
    
  </div>
  <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>
    <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>
    <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>
    <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>


    <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>
    <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>
    <div className='card_container'>
    
      <div className="cart_left">
      
        <h5>DR Bipin singh</h5>
        <h6>tyuiojhvbnmkjhg</h6>
        <p><span><IoMdCall/></span> 1324567890</p>
        <p> <span><HiOutlineMailOpen/></span>email</p>
        <p><span><FaLocationDot/></span>city</p>
       
       
      </div>
      <div className="cart_right">

</div>
      
      
    </div>
    </div>
      
  </>
  )
}
