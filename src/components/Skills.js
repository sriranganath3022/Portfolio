import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "HTML/CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React JS", level: 85 },
    { name: "SQL", level: 75 },
    { name: "DSA", level: 70 },
    { name: "Spring", level: 80 },
    { name: "UI/UX", level: 75 }
  ];

  const languages = [
    { name: "Tamil", proficiency: "Native or Bilingual Proficiency" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="mb-4">
              <Card.Header as="h5">Technical Skills</Card.Header>
              <Card.Body>
                <div className="skill-tags d-flex flex-wrap">
                  {technicalSkills.map(skill => (
                    <div key={skill.name} className="skill-tag m-1 p-2 bg-light border rounded">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={8} className="mx-auto">
            <Card>
              <Card.Header as="h5">Languages</Card.Header>
              <Card.Body>
                <ul className="list-group list-group-flush">
                  {languages.map(lang => (
                    <li key={lang.name} className="list-group-item d-flex justify-content-between">
                      <span>{lang.name}</span>
                      <span className="text-muted">{lang.proficiency}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;