import React from "react";
import "./Projects.css";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio built with React.js, showcasing my skills, education, and projects with smooth animations and clean design.",
      image: "https://cdn.dribbble.com/userupload/10862118/file/original-3794ef9f68fa540e731a27941852890b.png?resize=1200x900",
      tech: ["React.js", "Bootstrap", "CSS"],
      github: "https://github.com/anuragyadav7172/anurag-portfolio",
      demo: "#",
    },
    {
      title: "Marketplace for Construction Materials",
      description:
        "A CRUD-based eCommerce web platform to manage materials and vendors using HTML, CSS, Java, and MySQL.",
      image: "https://cdn.dribbble.com/userupload/8522249/file/original-9607a90d60ab19f8594ff3a91fc45f77.png?resize=1200x900",
      tech: ["HTML", "CSS", "Java", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description:
        "A React-based weather dashboard fetching live data using the OpenWeather API and displaying dynamic icons and backgrounds.",
      image: "https://cdn.dribbble.com/userupload/7930152/file/original-3c14e8a6b2955b89945a4c9d3313c4ce.png?resize=1200x900",
      tech: ["React.js", "OpenWeather API", "CSS"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="project-card shadow-sm h-100">
                <div className="project-img-wrapper">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="project-title">{project.title}</Card.Title>
                  <Card.Text className="project-desc">{project.description}</Card.Text>

                  <div className="tech-stack mb-3">
                    {project.tech.map((t, i) => (
                      <Badge bg="light" text="dark" key={i} className="tech-badge me-1">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <Button
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      size="sm"
                      className="me-2"
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="primary"
                      href={project.demo}
                      target="_blank"
                      size="sm"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
