import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import Invoice from '../invoices/Invoice';

const Milestone = ({ mileStone }) => {
  return (
    <Card key={mileStone.name} className="mb-3">
      <Card.Body>
        <Row>
          <Col>
            <span className="mr-2">{mileStone.name}</span>
            <Badge pill variant={mileStone.status === 'completed' ? 'success' : 'warning'}>
              {mileStone.status.toUpperCase()}
            </Badge>
          </Col>
          <Col>
            {mileStone.invoices.length < 1 ? <p>No invoice!</p> : <p>Invoices</p>}
            <Row>
              {mileStone.invoices.map((invoice) => (
                <Invoice key={invoice.id} invoice={invoice} />
              ))}
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default Milestone;
