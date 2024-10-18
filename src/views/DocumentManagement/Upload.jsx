import React from 'react'
import { Container,Form,Row,Col } from 'react-bootstrap';
import { FaRoad } from 'react-icons/fa';
function Upload() {
  return (
    <>
      <Container className="p-4 shadow-lg rounded bg-white">
        <h2 className="page-title"> Document Upload Screen </h2>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Document Title</Form.Label>
              <Form.Control type="text" placeholder="Document Title" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Document Type</Form.Label>
              <Form.Control as="select" type="text">
                <option value="" disabled>
                  Types
                </option>
                <option value="Tender">Tender</option>
                <option value="Bit">Bit</option>
                <option value="Contract">Contract</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label> Document Category</Form.Label>
              <Form.Control as="select" type="text">
                <option value="" disabled>
                  Types
                </option>
                <option value="Tender">Category 1 </option>
                <option value="Bit"> Category 2</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Version Number </Form.Label>
              <Form.Control type="number" placeholder="Document Title" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" placeholder="Enter the Tags" />
        </Form.Group>
       
      </Container>
    </>
  );
}


export default Upload;
