import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import '../css/navbar.css'
import Confi from '../Confi';
import toast, { Toaster } from 'react-hot-toast';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Tonavbar() {
    const [input,setinput]=useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit=async(e)=>{
        let api=`${Confi}/Doctor/signUp`;
        try {
            let response =await axios.post(api,input);
            console.log(response);
            toast.success(response.data.msg)
        } catch (error) {
          toast.error(error.response.data.msg)
            
        }

        setShow(false)

        e.preventDefault();
    }
    const Handleinput=(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}));
    }
    let nav=useNavigate();
    const loginDoctor=()=>{
      nav("/Doctorlogin")
    }

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container  >
        <Navbar.Brand to="/" style={{fontFamily:"cursive"}}>Dr.Apo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="me-auto  ">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="home" >Link</Nav.Link>
            <Nav.Link as={Link} to="appointment">Appointment</Nav.Link>
            <NavDropdown title=" Doctor's  " id="basic-nav-dropdown">
              
              <NavDropdown.Item  onClick={loginDoctor} >
               Dr Login 
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} onClick={handleShow}>Doctor Registration</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='headingmodel'>Registration From Only For Doctor's</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='modelss' >
               <div  >
               <label htmlFor="">Enter Name  <span style={{ color:"red"}}>*</span></label>
               <input type="text" name='name' onChange={Handleinput} required style={{outline:"none"}} />
               </div>
               <div>
               <label htmlFor="">Enter Email<span style={{ color:"red"}}>*</span></label>
               <input type="email" name='email' onChange={Handleinput}  required style={{outline:"none"}} />
               </div>
            </div>
            <div className='modelss'>
               <div  >
               <label htmlFor=""> Select option<span style={{ color:"red"}}>*</span></label>
               <Form.Select aria-label="Default select example" name="speciality" onChange={Handleinput} style={{width:"80%"}}>
               <option>Open this select menu</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="ENT">ENT</option>
          <option value="Neuro Surgeon">Neuro Surgeon</option>
          <option value="Dentist">Dentist</option>
          <option value="Plastic Surgeon">Plastic Surgeon</option>
    </Form.Select>
               </div>
               <div>
               <label htmlFor="">Enter Mobile no.<span style={{ color:"red"}}>*</span></label>
               <input type="tel" name='mobile' onChange={Handleinput} required style={{outline:"none"}} />
               </div>
            </div>
            <div className='modelss'>
               <div   >
               <label htmlFor="">Enter city   <span style={{ color:"red"}}>*</span></label>
               <input type="text" name='city' onChange={Handleinput} required style={{outline:"none"}} />
               </div>
               <div>
               <label htmlFor="">Enter password<span style={{ color:"red"}}>*</span></label>
               <input type="password" name='password' onChange={Handleinput} required style={{outline:"none"}} />
               </div>
            </div>
            
        </Modal.Body>
        <Modal.Footer style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
          <Button variant="secondary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Toaster/>
    </>
  )
}
