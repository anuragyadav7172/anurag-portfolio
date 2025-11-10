import React, { useRef, useState } from "react";
import "./Contact.css";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setAlert({ show: false, type: "", message: "" });

    emailjs
      .sendForm(
        "service_xv0no0m", // 🔹 Replace with your EmailJS Service ID
        "template_ffjhoe8", // 🔹 Replace with your Template ID
        form.current,
        "zZcZF4XpNfeRIKXP4" // 🔹 Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert({
            show: true,
            type: "success",
            message: "✅ Message sent successfully! I'll get back to you soon.",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setAlert({
            show: true,
            type: "danger",
            message: "❌ Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <p className="text-center contact-intro mb-4">
              Have an idea or opportunity? I’d love to connect!  
              Drop me a message or reach me via my social links below.
            </p>

            {alert.show && (
              <Alert
                variant={alert.type}
                className="text-center fw-semibold"
                onClose={() => setAlert({ show: false })}
                dismissible
              >
                {alert.message}
              </Alert>
            )}

            <Form ref={form} onSubmit={sendEmail} className="contact-form shadow-sm p-4 rounded">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" name="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" name="message" rows={4} placeholder="Your Message" required />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" className="px-4 fw-semibold" disabled={isSending}>
                  {isSending ? (
                    <>
                      <Spinner animation="border" size="sm" className="me-2" /> Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </Form>

            <div className="contact-links text-center mt-4">
              <a
                href="https://linkedin.com/in/anurag-yadav7489"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/anuragyadav7172"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub size={28} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
