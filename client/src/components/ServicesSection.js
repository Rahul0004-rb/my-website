import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// Ensure your updated styles are imported

function ServicesSection() {
  return (
    <Container fluid className="services-section">
      <Row className="justify-content-center align-items-center">
        <Col xs={12}>
          <h6 className="text-muted">SERVICES FOR SUCCESS</h6>
          <h1 className="services-title">
            Your Experience Design &<br />
            Technology Transformation Partner.
          </h1>
          <p className="services-description">
            At WE THINK APP (WTA), we specialize in enhancing customer
            experiences, building innovative solutions, modernizing
            applications, and leveraging cutting-edge technology with data
            analytics and AI. Our engineering-driven approach, combined with
            deep domain expertise and a collaborative Tribes and Squads model,
            enables us to deliver next-generation offerings that create real
            value for Fortune 500 companies, SMBs, and startups alike.
          </p>
          <Button variant="link" className="explore-button">
            Explore more →
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center stats-row">
        <Col xs={6} md={3} className="stats-col">
          <h2 className="stat-number">2015</h2>
          <p className="stat-description">WTA Founded</p>
        </Col>
        <Col xs={6} md={3} className="stats-col">
          <h2 className="stat-number">350+</h2>
          <p className="stat-description">Skilled Professionals</p>
        </Col>
        <Col xs={6} md={3} className="stats-col">
          <h2 className="stat-number">100+</h2>
          <p className="stat-description">Happy Clients</p>
        </Col>
        <Col xs={6} md={3} className="stats-col">
          <h2 className="stat-number">215+</h2>
          <p className="stat-description">Projects Delivered</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServicesSection;
