import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { projects } from '../../fixtures/projects';
import Milestone from '../../components/milestones/Milestone';

const Project = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = useMemo(() => projects.find((p) => p.id.toString() === id), [id]);

  if (!project) {
    return null;
  }
  
  return (
    <Container className="mt-5">
      <h3 className="text-center">{project.name}</h3>
      <Card>
        <Card.Body className="text-center">
          <Card.Text>
            <strong>Area: </strong>{project.sqft}sqft
          </Card.Text>
          <Card.Text>
            <strong>No of beds: </strong>{project.beds}
          </Card.Text>
          <Card.Text>
            <strong>No of bathrooms: </strong>{project.bathroom}
          </Card.Text>
          <Card.Text>
            <strong>Address: </strong>{project.address}
          </Card.Text>
        </Card.Body>
      </Card>
      <h5 className="text-center mt-3">Milestones</h5>
      {project.mileStones.map((ms) => (
        <Milestone key={ms.name} mileStone={ms} />
      ))}
    </Container>
  )
}

export default Project;
