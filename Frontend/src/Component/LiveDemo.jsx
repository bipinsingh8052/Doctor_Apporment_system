import React from 'react'
import '../css/livedemo.css'
import { PiStudentFill } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { FcCallback } from "react-icons/fc";

export default function LiveDemo() {
  return (
    <>
     <div className="liveDemo">

    
            <div className='noramllive'>
                <h1> What You'll Experience in Our
                <span> Live Demo</span></h1>
                 </div>
            <div className="cartslive">

                <div className="cardinfo">
                    <div className="images">
                        <p><PiStudentFill/></p>
                    </div>
                    <p>Personalized Walkthrough</p>
                    <span>Tailored demo sessions to meet your Specific needs.</span>
                </div>

                <div className="cardinfo">
                    <div className="images">
                        <p><MdLiveTv/></p>
                    </div>
                    <p>Live Q&A</p>
                    <span>Get real-time answers to your queries directly from our exports.</span>
                </div>

                <div className="cardinfo">
                    <div className="images">
                        <p><GiNotebook/></p>
                    </div>
                    <p>Feature Highlights</p>
                    <span>Explore key features and funtionalities that set MocDoc apart.</span>
                </div>

                <div className="cardinfo">
                    <div className="images">
                        <p><FcCallback/></p>
                    </div>
                    <p>Support</p>
                    <span>360-degree support for all your healthcare management needs.</span>
                </div>

            </div>
      
        </div> 


        <div className="banner">
            <div className="paragraph_banner">
                <h1> Streamline Your <span> Healthcare Operations </span> with our Innovative Solutions</h1>
                <p>Discover how MocDoc's comprehensive healthcare management solutions can transform your practice. Our intuitive software offers a seamless experience for hospitals, labs, clinics, and pharmacies.</p>
            </div>
            <div className="image_banner">
                <div className="image">
                    <img src="https://mocdoc.com/images/new-homepage/rank-one.webp" alt="" />
                </div>
                <div className="image">
                    <img src="https://mocdoc.com/images/new-homepage/rank-two.webp" alt="" />
                </div>
                <div className="image">
                    <img src="https://mocdoc.com/images/new-homepage/rank-three.webp" alt="" />
                </div>
                <div className="image">
                    <img src="https://mocdoc.com/images/new-homepage/rank-four.webp" alt="" />
                </div>
                <div className="image">
                    <img src="https://mocdoc.com/images/new-homepage/rank-six.webp" alt="" />
                </div>
                <div className="image">
                    <img src="https://mocdoc.com/images/new-homepage/rank-seven.webp" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
