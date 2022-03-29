import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Link from 'next/link'

import { projects } from '../fixtures/projects';

const Projects = () => (
  <Container responsive className="mt-5">
    <h3 className="text-center">Projects</h3>
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Project name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={project.id}>
            <td>{index}</td>
            <td>{project.name}</td>
            <td><Link href={`/projects/${project.id}`}>Show</Link></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
);

export default Projects;
