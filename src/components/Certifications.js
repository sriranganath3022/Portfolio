import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: "Java Full Stack (TATA Strive)",
      issuer: "GENERATION INDIA",
      description: "Junior Full Stack developer certification"
    },
    {
      id: 2,
      name: "Codecademy",
      issuer: "Codecademy",
      description: "React, Java, JavaScript, Bootstrap, SQL, Spring and Spring Boot"
    },
    {
      id: 3,
      name: "Crash Course on Python",
      issuer: "Google (Coursera)",
      description: "An online credit course authorized by Google"
    }
  ];

  return (
    <section id="certifications" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Certifications</h2>
        <ListGroup>
          {certifications.map(cert => (
            <ListGroup.Item key={cert.id}>
              <strong>{cert.name}</strong> - {cert.issuer}
              <p className="mb-0 text-muted">{cert.description}</p>
            </ListGroup.Item>
          ))}
        </ListGroup>


      </Container>
    </section>
  );
};

export default Certifications;