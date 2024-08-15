import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function OurWork() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="your-project-image-url.jpg" />
                        <Card.Body>
                            <Card.Title>Project Title</Card.Title>
                            <Card.Text>Brief description of the project and client testimonial.</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Repeat for more projects */}
            </Row>
        </Container>
    );
}

export default OurWork;
