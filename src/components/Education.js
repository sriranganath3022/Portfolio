import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Education = () => {
  const education = [
    {
      degree: "Bachelor Of Technology - Information Technology",
      institution: "KGiSL Institute of Technology",
      duration: "07/2019 - 07/2023",
      score: "8.05 CGPA"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Kurinji Matriculation Higher Secondary School",
      duration: "06/2016 - 03/2017",
      score: "93%"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Kurinji Matriculation Higher Secondary School",
      duration: "06/2018 - 03/2019",
      score: "61%"
    }
  ];

  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Education</h2>
        {education.map((edu, index) => (
          <Card className="mb-4" key={index}>
            <Card.Body>
              <Card.Title>{edu.degree}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{edu.institution} | {edu.duration}</Card.Subtitle>
              <Card.Text>
                Score: {edu.score}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default Education;