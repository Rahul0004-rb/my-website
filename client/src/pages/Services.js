import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaCloud } from 'react-icons/fa';

function Services() {
    return (
        <Container>
            <Row>
                <Col md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <FaLaptopCode size={40} />
                            <Card.Title>Digital Solutions</Card.Title>
                            <Card.Text>Providing innovative digital solutions tailored to your business needs.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <FaCloud size={40} />
                            <Card.Title>IT Solutions</Card.Title>
                            <Card.Text>Comprehensive IT solutions to streamline your operations and improve efficiency.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;
