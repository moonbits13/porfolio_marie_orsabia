import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import catto from "../assets/catto.png";
import me from "../assets/me-as-cat.jpg";
import veronlogo from "../assets/veron-logo.png";

const Hero = () => {
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
        <div className="col-1">MARIE VERON ORSABIA</div>
        <div className="col-2">
          <div className="item-2">graphics designer</div>
        </div>
      </div>

      <div className="cat-pic">
        <img src={catto} alt="green" className="img-divider" />
      </div>

      <div className="container-4">
        <div className="text-div">
          <h2>i'm just a lost meow meow</h2>
          <p>usto ko lang maka-survive, magkapera, at sana magkaroon ng peace</p>
          <button className="cta-button">Click Me</button>
        </div>
        <div className="image-div">
          <img src={me} alt="ako" className="cats" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
