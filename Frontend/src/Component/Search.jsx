import Form from 'react-bootstrap/Form';
import  { useState ,useEffect} from "react";
import { AutoComplete, Input } from "antd";
import Confi from '../Confi';
import axios from 'axios';
import { SiExpertsexchange } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/search.css'
const suggestions = ['Bipin singh', 'Rinku singh', 'Rohit yadav', 'Prashant Pandey', 'Prayagaraj', 'Prayagraj,Naini', 'Rewa', 'Cardiologist', 'ENT', 'Neuro Surgeon', 'Dentist'];

export default function Search() {
    const [options, setOptions] = useState([]);
    // const [select,setselect]=useState("");
    const [search,setsearch]=useState({});
    const [Alldata,setAllData]=useState([]);
    const [name,setname]=useState("");
    const [id,setid]=useState("");
    const [status,setStatus]=useState(true);
    const [bookinput,setbookinput]=useState({});

    // model
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    const handleShow = (name,id) =>{ setShow(true)
        setname(name)
        setid(id);
    };



    // model

    let loading=async()=>{
        let api=`${Confi}/display`
        try {
          let resp= await axios.get(api);
        //   console.log(resp.data)
          setAllData(resp.data);
         
          
        } catch (error) {
          toast.error(error.response.data.msg)
          
        }
      }
     


    // appoiment booking

    const handleinputbooking=(e)=>{
        let{name,value}=e.target;
        setbookinput(vlaues=>({...vlaues,[name]:value}))
    }
    const bookYourAppominet=()=>{
        console.log(bookinput)
    }
    // appoinment booking

    // let[data,setData]=useState([]);
    // let loading=async()=>{
    //   let api=`${Confi}/display`
    //   try {
    //     let resp= await axios.get(api);
    //     // console.log(resp.data)
    //     setData(resp.data);
    //     // suggestions.push(...data.map((e) => e.name)); 
    //     // suggestions.push(...data.map((e) => e.city)); 
    //     // suggestions.push(...data.map((e) => e.specailization));
    //   } catch (error) {
    //     console.log(error)   
    //   }
    // }

    const handleSearch = (value) => {
      setOptions(value ? suggestions.filter(item => item.toLowerCase().includes(value.toLowerCase())) : []);
    };

const Searchit=async()=>{
    let api=`${Confi}/search`;
    try {
        let response =await axios.post(api,search);
        console.log(response.data)
        setAllData(response.data)
    } catch (error) {
       
        toast.error(error.response.data.msg)
    }
    console.log(search)
}

const handlesearch=(e)=>{
    let {name,value}=e.target;
    setsearch(valuse=>({...valuse,[name]:value}))
}

//   useEffect(()=>{
//         loading() 
//     },[suggestions])
useEffect(()=>{loading()

},[])
  return (
    <>
    <div className="search">
        <div className="search_container">
            <h5>Book & Meet a Doctor!</h5>
            <p>India's best online appointment scheduling platform</p>
            <div className="searchBar">
              <Form.Select aria-label="Default select example" name='option' onChange={handlesearch} className='options'>
              <option>Search from Speci</option>
              <option value="Cardiologist">Cardiologist</option>
                <option value="ENT">ENT</option>
                <option value="Neuro Surgeon">Neuro Surgeon</option>
                <option value="Dentist">Dentist</option>
                <option value="Plastic Surgeon">Plastic Surgeon</option>
                </Form.Select>

                <div className="input">
                <AutoComplete
                    options={options.map((item) => ({ value: item }))}
                    onSearch={handleSearch}
                    style={{ width: 250 }}
                    >
                    <Input placeholder="Write it Dr. Name..." name='input' onChange={handlesearch} />
                    </AutoComplete>
                </div>
                <div className="button">
                    <button onClick={Searchit} >Search</button>
                </div>
                
            </div>
        </div>
    </div>





    {/* cards */}

    {status? (<div className="nameinformation">
        <div className="carts_info">
            {
                Alldata.map((e,index)=>{return(
                    <div className='card_container'  key={index}>
                    
                        <div className="cart_left">
                        
                            <h5><span>Dr</span> {e.name}</h5>
                            <h6>{e.specailization}</h6>
                            <p><span><IoMdCall/></span>{e.mobileNo}</p>
                            <p> <span><HiOutlineMailOpen/></span>{e.Email}</p>
                            <p><span><FaLocationDot/></span>{e.city}</p>
                            <button onClick={()=>{handleShow(e.name,e._id)}}>Book Appoiment</button>
                        </div>
                        <div className="cart_right">
                        </div>
                </div>
                )})
            }
                
        </div>

    </div>)  :(
        <div className="notfound">
            <div className="inner_notfound">
                <div className="main-innnerfo">
                    This is not Found   <SiExpertsexchange/>
                </div>
            </div>
        </div>
        )}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Book Your Appointment  Dr.{name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className='modelss' >
               <div  >
               <label htmlFor="">Enter Name  <span style={{ color:"red"}}>*</span></label>
               <input type="text" name='name'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
               <div>
               <label htmlFor="">Enter Email<span style={{ color:"red"}}>*</span></label>
               <input type="email" name='email'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
            </div>
            <div className='modelss' >
               <div  >
               <label htmlFor="">Enter mobile  <span style={{ color:"red"}}>*</span></label>
               <input type="tel" name='mobile'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
               <div>
               <label htmlFor="">Enter Disease<span style={{ color:"red"}}>*</span></label>
               <input type="text" name='disease'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
            </div>

            <div className='modelss' >
               <div  >
               <label htmlFor="">Enter date  <span style={{ color:"red"}}>*</span></label>
               <input type="date" name='date'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
               <div  >
               <label htmlFor="">Enter City  <span style={{ color:"red"}}>*</span></label>
               <input type="text" name='city'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
            </div>
            <div className='modelss' >
               <div  >
               <label htmlFor="">Enter time  <span style={{ color:"red"}}>*</span></label>
               <input type="time" name='time'  required style={{outline:"none"}} onChange={handleinputbooking} />
               </div>
               
            </div>
          </Modal.Body>
          <Modal.Footer style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <Button variant="primary" onClick={bookYourAppominet}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>



      <Toaster/>
    </>
  )
}
