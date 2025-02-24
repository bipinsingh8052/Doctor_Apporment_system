
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../css/footer.css'
export default function ToFooter() {
  return (
    <>
    <div className="container_Footer">
        <div className="icons">
           <div> <FaInstagram/></div>
           <div> <FaFacebookF/></div>
           <div>  <FaFacebookMessenger/></div>
           <div>  <FaTwitter/></div>
           <div>  <FaYoutube /></div>
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li> <Link to="/">News</Link> </li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Our Team</Link></li>
            </ul>
        </div>
        <div className="footering">
            <p>
                Copyright © 2025 :Designed by BIPIN SINGH
            </p>
        </div>
    </div>
      
    </>
  )
}
