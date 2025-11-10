import React from "react";
import "./Skills.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        {
          name: "React.js",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React",
          bg: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "Redux",
          link: "https://redux.js.org/introduction/getting-started",
          bg: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
        },
        {
          name: "JavaScript (ES6+)",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          bg: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          name: "HTML5",
          link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
          bg: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
        },
        {
          name: "CSS3",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          bg: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
        },
        {
          name: "Bootstrap",
          link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
          bg: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "MySQL",
          link: "https://dev.mysql.com/doc/",
          bg: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
        },
        {
          name: "MongoDB (Basics)",
          link: "https://www.mongodb.com/docs/",
          bg: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
        },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        {
          name: "Git / GitHub",
          link: "https://docs.github.com/en/get-started",
          bg: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
        },
        {
          name: "VS Code",
          link: "https://code.visualstudio.com/docs",
          bg: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        },
        {
          name: "AWS Cloud (Basics)",
          link: "https://docs.aws.amazon.com/",
          bg: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Technical Skills</h2>

        {skills.map((group, idx) => (
          <div key={idx} className="skills-group mb-5">
            <h5 className="skills-heading">{group.category}</h5>
            <Row className="justify-content-center">
              {group.items.map((skill, index) => (
                <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4 text-center">
                  <a
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-link"
                  >
                    <Card
                      className="skill-card shadow-sm mx-auto"
                      style={{ backgroundImage: `url(${skill.bg})` }}
                    ></Card>
                    <p className="skill-name">{skill.name}</p>
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
