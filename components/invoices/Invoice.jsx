import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

const Invoice = ({ invoice }) => {
  return (
    <Col sm={6}>
      <Card className="text-center" key={invoice.id}>
        <Card.Body>
          <Card.Text>
            Created at: {moment(invoice.created_at).format('DD-MM-yyyy HH:mm')}
          </Card.Text>
          <Card.Text>
            Due date: {moment(invoice.due_date).format('DD-MM-yyyy HH:mm')}
          </Card.Text>
          <Card.Text>
            Paid amount: {invoice.paid_amount}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{invoice.due_amount} remaining!</Card.Footer>
      </Card>
    </Col>
  );
};

export default Invoice;
