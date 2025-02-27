import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import catto from "../assets/catto.png";
import me from "../assets/me-as-cat.jpg";
import veronlogo from "../assets/veron-logo.png";

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
       </div>
  );
};

export default AboutUs;
