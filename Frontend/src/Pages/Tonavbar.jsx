import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

export default function Tonavbar() {
    const [input,setinput]=useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit=async(e)=>{
        let api="";
        try {
            let response =await axios.post(api,input);
            console.log(response);
        } catch (error) {
            console.log("erroe")
            
        }

        setShow(false)

        e.preventDefault();
    }
    const Handleinput=(e)=>{
        let{name,value}=e.target;
        setinput(values=>({...values,[name]:value}));
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
            <Nav.Link as={Link} to="home">Link</Nav.Link>
            <Nav.Link as={Link} onClick={handleShow} >Doctor Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration From Only For Doctor's</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{display:'flex', marginBottom:"10px", width:"100%", alignItems:"center" ,justifyItems:"center", justifyContent:"space-between" }}>
               <div  >
               <label htmlFor="">Enter Name  <span style={{ color:"red"}}>*</span></label>
               <input type="text" name='name' onChange={Handleinput} required style={{outline:"none"}} />
               </div>
               <div>
               <label htmlFor="">Enter Email<span style={{ color:"red"}}>*</span></label>
               <input type="email" name='email' onChange={Handleinput}  required style={{outline:"none"}} />
               </div>
            </div>
            <div style={{display:'flex', marginBottom:"10px",justifyContent:"space-between"  }}>
               <div  >
               <label htmlFor=""> Select option<span style={{ color:"red"}}>*</span></label>
               <input type="text" style={{outline:"none"}} />
               </div>
               <div>
               <label htmlFor="">Enter Mobile no.<span style={{ color:"red"}}>*</span></label>
               <input type="tel" name='mobile' onChange={Handleinput} required style={{outline:"none"}} />
               </div>
            </div>
            <div style={{display:'flex', marginBottom:"10px" ,justifyContent:"space-between" }}>
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
    </>
  )
}
