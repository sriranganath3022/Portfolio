import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "CODECRAFT INFOTECH",
      duration: "03/2025 - 04/2025",
      description: "Worked on full stack web development projects using various technologies."
    },
    {
      role: "Participant",
      company: "Dare2compete Hackathon",
      duration: "07/2022",
      description: "Participated in an online hackathon festival (season 3) organized by the Indian Institute of Technology (IIT)."
    }
  ];

  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Experience & Activities</h2>
        <Row>
          {experiences.map((exp, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{exp.role}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{exp.company} | {exp.duration}</Card.Subtitle>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;