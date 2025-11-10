import React from "react";
import "./Hero.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="home" className="hero-animated d-flex align-items-center position-relative">
      {/* Animated Background Circles */}
      <div className="bg-animation">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
      </div>

      <Container className="position-relative">
        <Row className="align-items-center justify-content-center text-center text-md-start">
          {/* Left Column: Text */}
          <Col md={6}>
            <h1 className="hero-title mb-3">
              Hi, I'm <span className="highlight">Anurag Yadav</span>
            </h1>
            <h4 className="hero-role mb-3 text-secondary">
              React Developer | Front-End Engineer
            </h4>
            <p className="hero-desc mb-4">
              I’m a Computer Science graduate passionate about creating interactive,
              responsive, and user-friendly web applications using modern
              technologies like React.js, JavaScript, and Bootstrap.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Button href="#projects" variant="primary" className="hero-btn">
                View Projects
              </Button>
              <Button href="#contact" variant="outline-primary" className="hero-btn-outline">
                Contact Me
              </Button>
            </div>
          </Col>

          {/* Right Column: Image */}
          <Col md={6} className="text-center mt-5 mt-md-0">
            <div className="image-box">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                alt="Anurag Yadav - React Developer"
                className="hero-photo img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
