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
import Carousel from 'react-bootstrap/Carousel';
import Car from '../assets/car.jpg';
import Fort from '../assets/fort.jpg';
import Hytec from '../assets/hytec.jpg';
import Lrt2 from '../assets/lrt2.jpg';
import Mmda from '../assets/mmda.jpg';
import National2 from '../assets/national2.jpg';
import Quezon from '../assets/quezon.jpg';
import Rizal from '../assets/rizal.jpg';
import Subic from '../assets/subic bay.jpg';
import Scrollspy from 'react-scrollspy';



const Portfolio = () => {
  return (

    <>
    {/* Navbar */}
    <Navbar expand="lg" className=" shadow-sm fixed-top">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">Marie Veron Orsabia</Navbar.Brand>
        <Navbar.Toggle className='mav' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
        <Scrollspy
            items={['home', 'works', 'blog', 'contact']}
            currentClassName="active"
            className="navbar-nav ms-auto d-flex gap-3"
            offset={-80} // adjust based on your layout
          >
            <Nav.Link href="#home">About me</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#tour">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Scrollspy>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* Hero Section */}
    <section className="container-fluid  vh-100 d-flex align-items-center" id="home">
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
<section id="works" className="py-5  text-center" >
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
        <a href="" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>Visit</a>
        <a href="https://github.com/moonbits13/pokedex2" className="btn btn-outline-light">Github</a>
            </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-4 mb-4">
        <img src={Proj2} alt="Beauvois Place" className="img-fluid rounded" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">FLOWERSHOP</h6>
        <p className='font-color'>developed using HTML and CSS </p>
        <div className="mt-4">
           <a href="https://flowershopnimarie.netlify.app/" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>Visit</a>
          <a href="https://github.com/moonbits13/flowershop" className="btn btn-outline-light">Github</a>
            </div>
      </div>

      {/* Project 3 */}
      <div className="col-md-4 mb-4">
        <img src={Todo} alt="Frucinni" className="img-fluid rounded font-color" />
        <h6 className="mt-3 text-uppercase fw-bold font-color">TO-DO LIST</h6>
        <p className='font-color'>developed using React-vite and React-bootstrap</p>
        <div className="mt-4">
        <a href="https://todolistorsabialagoyo.netlify.app/" className="btn btn-light linkedin" style={{ color :"black", marginRight : "10px"}}>Visit</a>
        <a href="https://github.com/moonbits13/todo-list" className="btn btn-outline-light">Github</a>
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

<section className="py-5 text-center " id="tour">
  <Container>
    <h2 className="display-5 fw-bold mb-5 font-color" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "1px" }}>
      EDUCATIONAL TOUR 2025
    </h2>
    <Carousel indicators={true} interval={2500}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem", margin: "10px", height: "28rem",}}>
            <img src={Fort} className="card-img-top" alt="Canna Lily" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 1</h5>
              <p className="card-text  ">FORT SANTIAGO</p>
              <a href="https://github.com/moonbits13/todo-list" className="btn btn-outline-dark" style={{ marginTop:"20px" }}>Visit</a>
            </div>
          </div>
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem"}}>
            <img src={Rizal} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title  ">DAY 1</h5>
              <p className="card-text  ">LUNETA PARK</p> 
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark" style={{ marginTop:"20px" }}>Visit</a>
            </div>
          </div>
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem"}}>
            <img src={Subic} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 2</h5>
              <p className="card-text ">SUBIC BAY EXHIBIT AND CONVENTION CENTER </p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark">Visit</a>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem"}}>
            <img src={Quezon} className="card-img-top" alt="Jade Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 3</h5>
              <p className="card-text ">MANUEL L. QUEZON MEMORIAL CIRCLE</p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark">Visit</a>
            </div>
          </div>
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem", margin: "10px", height: "28rem" }}>
            <img src={National2} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 3</h5>
              <p className="card-text ">NATIONAL MUSEUM</p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark" style={{ marginTop:"20px" }}>Visit</a>
            </div>
          </div>
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem"}}>
            <img src={Car} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 3</h5>
              <p className="card-text ">CARS OF THE PHILIPPINE PRESIDENTS</p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark">Visit</a>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem" }}>
            <img src={Hytec} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 4</h5>
              <p className="card-text ">HYTEC POWER INC.</p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark" style={{ marginTop: "20px"}}>Visit</a>
            </div>
          </div>
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem"}}>
            <img src={Lrt2} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 5</h5>
              <p className="card-text ">LRT LINE 2</p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark" style={{ marginTop:"20px" }}>Visit</a>
            </div>
          </div>
          <div className="card shadow-sm" style={{ width: "18rem", borderRadius: "1rem" , margin: "10px", height: "28rem"}}>
            <img src={Mmda} className="card-img-top" alt="Zebra Plant" style={{  height: "15rem" }} />
            <div className="card-body">
              <h5 className="card-title ">DAY 5</h5>
              <p className="card-text ">TRAFFIC ENGINGEERING CENTER MMDA</p>
              <a href="https://Visit.com/moonbits13/todo-list" className="btn btn-outline-dark">Visit</a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </Container>
</section>

<section className="py-5" style={{ marginTop: "150px"}} id="contact" >
    <Container>
    <h2 className="display-5 fw-bold mb-5 font-color" style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "1px" , textAlign: "center"}}>
      LET ME HEAR FROM YOU
    </h2>
    <div className="row align-items-stretch g-0 shadow-sm">
          {/* Left Column */}
          <div className="col-md-6 d-flex flex-column justify-content-between p-5 ">
            <div>
              <h2 className="display-5 fw-semibold mb-4 font-color" style={{ fontFamily: 'serif' }}>Work with Me</h2>

              <div className="mb-4">
                <h6 className="fw-bold font-color">Address</h6>
                <p className="mb-0 font-color">Purok 2 Sinunuc, Zamboanga City</p>
                <p className='font-color'>Philippines, 7000</p>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold font-color">Phone</h6>
                <p className='font-color'>(063) 906 656 0025</p>
              </div>

              <div>
                <h6 className="fw-bold font-color">Email</h6>
                <p className='font-color'>orsabiamarieveron@gmail.com</p>
              </div>
            </div>

            <div className="mt-4 text-muted small font-color">
              <strong className='font-color'>𝒸𝒽𝒶𝓈𝑒 𝓉𝒽𝒶𝓉 𝒹𝓇𝑒𝒶𝓂</strong>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <img
              src={Proj2}
              alt="Work with Me"
              className="img-fluid w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
    </Container>
    </section>

    
  </>
);
}

export default Portfolio