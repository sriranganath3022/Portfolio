import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>

        <Row className="mb-5">
          <Col lg={6} className="mx-auto">
            <Card className="mb-4">
              <Card.Body>
                <h5>Contact Information</h5>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-envelope me-2"></i> sriranganath1307@gmail.com</li>
                  <li className="mb-2"><i className="bi bi-phone me-2"></i> +91 7904748103</li>
                  <li className="mb-2"><i className="bi bi-geo-alt me-2"></i> Bangalore, India</li>
                </ul>

                <h5 className="mt-4">Connect With Me</h5>
                <div className="d-flex gap-3 mt-2">
                  <a href="https://www.linkedin.com/in/sriranganath-murugesan-a38506246/" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/sriranganath3022?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;