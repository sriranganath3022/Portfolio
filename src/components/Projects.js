import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Skill Loop",
      duration: "02/2025 - Present",
      description: "A peer-to-peer learning platform aimed at solving education and training problems.",
      technologies: ["React", "Java", "Spring Boot", "SQL"]
    },
    {
      id: 2,
      title: "University Admit Eligibility Prediction",
      description: "A prediction system that helps students determine their eligibility for university admission.",
      technologies: ["Machine Learning", "Python", "Data Analysis"]
    },
    {
      id: 3,
      title: "Early Chronic Kidney Disease Prediction",
      description: "Predicts kidney disease based on patient dataset, determining whether patients are affected or not.",
      technologies: ["Machine Learning", "Healthcare", "Data Science", "Python"]
    }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map(project => (
            <Col md={4} className="mb-4" key={project.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  {project.duration && <Card.Subtitle className="mb-2 text-muted">{project.duration}</Card.Subtitle>}
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-2">
                    {project.technologies.map(tech => (
                      <Badge bg="primary" className="me-1 mb-1" key={tech}>{tech}</Badge>
                    ))}
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