import React from 'react'
import catto from '../assets/catto.jpg'
import me from '../assets/me-as-cat.jpg'



const Hero = () => {
  return (

    <div className="container">

    <nav>
    <div class="logo">
    meow wala pa po
    </div>

    <div class="nav-links">
     <div className="a">home</div>
     <div className="a">about me</div>
     <div className="a">my works</div>
     <div className="a">hire me</div>
    </div>
    </nav>

    <div className="container-2">
        <div className="col-1">MARIE VERON ORSABIA</div>
        <div className="col-2">
            <div className="item-2">graphics designer  </div>
  
        </div>
    </div>

    <div className="cat-pic">
    <img
            src={catto}
            alt="green"
            className="img-divider"
          />
    </div>

    
    <div className="button-container">
        <button className="cta-button">sir babawi naalng sa susunod promise </button>
      </div>

   

    </div>
   


  )
}

export default Hero