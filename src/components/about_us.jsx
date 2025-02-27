import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import catto from "../assets/catto.png";
import veronlogo from "../assets/veron-logo.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

const AboutUs = () => {
  return (
   <div className="container">
         <nav>
           <div className="logo">
             <img src={veronlogo} alt="logo" className="logo" />
           </div>
   
           <div className="nav-links">
             <Link to="/" className="nav-link">
               <div className="a">home</div>
             </Link>
             <Link to="/about" className="nav-link">
               <div className="a">about me</div>
             </Link>
             <div className="a">my works</div>
             <div className="a">hire me</div>
           </div>
         </nav>

         <div className="container-2">
        <div className="col-1">ABOUT ME</div>
      </div>

         <div class="container-about">
        
        <div class="first-row">
            <div class="box">
              <img src={first} alt="curious catto"  />
            </div>
            <div class="box">
              <img src={second} alt="eepy catto"  />
            </div>
            <div class="box">
              <img src={third} alt="girl boss catto"  />
            </div>
        </div>

       
        <div class="second-row">
            <p>I'm just a curious and tired soul, navigating life one mediocre task at a time, secretly hoping it all adds up to something great. I dream of being my own boss,
               even if it means stumbling through the process with caffeine and determination. Here's to figuring it out, one step at a time.</p>
        </div>
    </div>
       </div>
       
  );
};

export default AboutUs;
