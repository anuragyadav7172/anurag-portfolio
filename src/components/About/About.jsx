import React from "react";
import "./About.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about-section-modern">
      <Container>
        <h2 className="section-title text-center mb-5">About Me</h2>
        <Row className="align-items-center justify-content-center">
          {/* LEFT SIDE: ABOUT TEXT */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="about-card shadow-sm p-4">
              <h3 className="about-heading mb-3">Who I Am 💻</h3>
              <p className="about-text">
                I'm <strong>Anurag Yadav</strong>, a passionate React Developer from Indore, India.  
                A Computer Science graduate (B.Tech, IES-IPS Academy, 2025) specializing in 
                front-end development. I love building responsive, high-performance, and 
                interactive web applications using React.js, JavaScript, and Bootstrap.  
                <br /><br />
                I enjoy transforming creative ideas into meaningful digital experiences, 
                focusing on performance, usability, and clean design.
              </p>
              <div className="about-info mt-4">
                <p><strong>📍 Location:</strong> Indore, India</p>
                <p>
  <strong>📧 Email:</strong>{" "}
  <a
    href="mailto:post.anuragyadav@gmail.com?subject=Hello%20Anurag%20👋"
    className="email-link"
  >
    post.anuragyadav@gmail.com
  </a>
</p>

                <p><strong>💼 Role:</strong> React Developer — Front-End Engineer</p>
              </div>
            </div>
          </Col>

          {/* RIGHT SIDE: EDUCATION TIMELINE */}
          <Col md={6}>
            <div className="edu-wrapper">
              <Card className="edu-card mb-4 shadow-sm">
                <Card.Body>
                  <h5 className="edu-degree">🎓 B.Tech in Computer Science</h5>
                  <p className="edu-school mb-1">IES-IPS Academy, Indore</p>
                  <p className="edu-year">2021 – 2025 | CGPA: 6.85</p>
                </Card.Body>
              </Card>

              <Card className="edu-card mb-4 shadow-sm">
                <Card.Body>
                  <h5 className="edu-degree">📘 Higher Secondary (12th)</h5>
                  <p className="edu-school mb-1">DAVV Excellence No. 1</p>
                  <p className="edu-year">2021 | 82.2%</p>
                </Card.Body>
              </Card>

              <Card className="edu-card shadow-sm">
                <Card.Body>
                  <h5 className="edu-degree">📗 High School (10th)</h5>
                  <p className="edu-school mb-1">Bapna Public School</p>
                  <p className="edu-year">2019 | 83.4%</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
