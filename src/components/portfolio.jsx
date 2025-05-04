import React from 'react'
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Veron from '../assets/veron.jpg'
import Proj2 from '../assets/project2.jpg';
import Proj3 from '../assets/pokedex.png';
import Todo from '../assets/todo.png';
import Proj4 from '../assets/project4.png';
import Proj5 from '../assets/project5.png';
import Proj6 from '../assets/project6.png';





const Portfolio = () => {
  return (

    <>
    {/* Navbar */}
    <Navbar expand="lg" className=" shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Marie Veron Orsabia</Navbar.Brand>
        <Navbar.Toggle className='mav' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Hero Section */}
    <section className="container-fluid  vh-100 d-flex align-items-center">
      <Container>
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img src={Veron} alt="SiVeron"  className="img-fluid"  style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}/>
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h1 className="display-3 fw-bold font-color">Marie Veron<br />Orsabia</h1>
            <h5 className="text-uppercase fw-semibold mb-3 font-color2">Front-End Developer</h5>
            <p className="fs-5 font-color">
            I'm a freelance programmer based in Zamboanga City, focused on front-end development for both web and mobile applications. I help bring ideas to life with clean, responsive, and user-friendly interfaces.
            </p>

            <div className="mt-4">
            <a href="https://www.linkedin.com/in/marie-veron-cagang-orsabia-312823312/" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>LinkedIn</a>
            <a href="https://github.com/moonbits13" className="btn btn-outline-light">Github</a>
            </div>
          </div>

        </div>
      </Container>
    </section>
    
    {/* Star Projects Section */}
<section id="projects" className="py-5  text-center">
  <Container>
    <h2 className="display-5 fw-bold mb-5 font-color" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "1px" }}>
      MY WORKS
    </h2>
    <div className="row justify-content-center" style={{ marginBottom: "100px" }}>

      {/* Project 1 */}
      <div className="col-md-4 mb-4">
        <img src={Proj3} alt="The Amber House" className="img-fluid rounded" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">POKEDEX</h6>
        <p className='font-color'>developed using React-vite and React-bootstrap</p>
        <div className="mt-4">
        <a href="https://flowerfshopnimarie.netlify.app/" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>Visit</a>
        <a href="https://github.com/moonbits13/pokedex" className="btn btn-outline-light">Github</a>
            </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-4 mb-4">
        <img src={Proj2} alt="Beauvois Place" className="img-fluid rounded" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">FLOWERSHOP</h6>
        <p className='font-color'>developed using HTML and CSS </p>
        <div className="mt-4">
           <a href="https://flowershopnimarie.netlify.app/" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>Visit</a>
          <a href="https://github.com/moonbits13" className="btn btn-outline-light">Github</a>
            </div>
      </div>

      {/* Project 3 */}
      <div className="col-md-4 mb-4">
        <img src={Todo} alt="Frucinni" className="img-fluid rounded font-color" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">TO-DO LIST</h6>
        <p className='font-color'>developed using React-vite and React-bootstrap</p>
        <div className="mt-4">
        <a href="https://flowershodpnimarie.netlify.app/" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>Visit</a>
        <a href="https://github.cdom/moonbits13" className="btn btn-outline-light">Github</a>
            </div>
      </div>

      <h2 className="display-5 fw-bold mb-5 font-color " style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "1px", marginTop: "100px" }}>
      OTHER WORKS 
    </h2>

     {/* Project 1 */}
     <div className="col-md-4 mb-4">
        <img src={Proj4} alt="The Amber House" className="img-fluid rounded zise" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">PACKAGE MOCKUP</h6>
        <div className="mt-4">

            </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-4 mb-4">
        <img src={Proj5} alt="Beauvois Place" className="img-fluid rounded zise" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">CALLING CARD MOCKUP</h6>
        <div className="mt-4">

            </div>
      </div>

      {/* Project 3 */}
      <div className="col-md-4 mb-4">
        <img src={Proj6} alt="Frucinni" className="img-fluid rounded font-color zise" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">FLYER MOCKUP</h6>
        <div className="mt-4">
 
            </div>
      </div>

    </div>


    


    
   
  </Container>
</section>
    
  </>
);
}

export default Portfolio