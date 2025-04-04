import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Sriranganath Murugesan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#certifications">Certifications</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <section id="home" className="py-5 hero-section">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={4}>
                <img
                  src="pf.png"
                  alt="Profile"
                  className="profile-img"
                  style={{ width: "300px", height: "300px" }}
                />
              </Col>
              <Col xs={12} md={8} className="text-md-start text-center">
                <h1 className="display-4">Sriranganath Murugesan</h1>
                <p className="lead">Full Stack Developer | Bangalore, India</p>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => window.open("https://drive.google.com/file/d/1_Sh9KXhC1gdabZItyDB4T01ZiCKWZ1ks/view?usp=drive_link", "_blank")}
                >
                  View Resume
                </button>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </div>
  );
}

export default App;