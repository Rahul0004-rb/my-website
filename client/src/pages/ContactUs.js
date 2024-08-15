import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Map from '../components/Map';

function ContactUs() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>
                            <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" /></Form.Group>
                        <Button variant="primary" type="submit">Send</Button>
                    </Form>
                    <div className="mt-4">
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@mywebsite.com</p>
                    </div>
                </Col>
                <Col md={6}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;
