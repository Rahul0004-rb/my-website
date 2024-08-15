import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>About Us</h2>
                    <p>We are a team of dedicated professionals committed to providing top-notch services.</p>
                    <p>Our values include integrity, excellence, and customer satisfaction.</p>
                </Col>
                <Col md={6}>
                    {/* <video width="100%" controls>
                        <source src="your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </Col>
            </Row>
        </Container>
    );
}

export default AboutUs;
