import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function WTAMain() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center text-center main-header">
        <Col md={8}>
          <h1 className="main-title text-center">Welcome to MyWebsite</h1>
          <p className="sub-title text-center">
            Your one-stop solution for all your needs.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center text-center main-header">
        <Col md={8}>
          <h2 className="text-center">Digitally Transformed</h2>
          <p className="text-center">
            Digitally Transformed and made an impact through our intuitive user
            experience and innovative solutions.
          </p>
          <p className="text-center">
            Digitally TransformedDigitally TransformedDigitally
            TransformedDigitally TransformedDigitally Transformed
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default WTAMain;
