import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#home" className="brand">
          <span className="brand-name">Anurag Yadav</span>
          <span className="brand-role">React Developer</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">
              Contact
            </Nav.Link>

            <Button
              variant="outline-light"
              className="resume-btn ms-lg-3"
              href="/resume.pdf"
              download="Anurag_Yadav_Resume.pdf"
            >
              <i className="bi bi-download me-1"></i> Resume
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
