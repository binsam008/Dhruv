import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const sponsors = ["TechCorp", "InnovateAI", "RoboTech", "FutureCode"];

const Sponsors = () => (
  <section id="sponsors" className="py-5 bg-dark text-light">
    <div className="text-center mb-4">
      <h2 className="fw-bold text-warning">Our Sponsors</h2>
      <p>Powered by industry leaders</p>
    </div>
    <Row>
      {sponsors.map((sponsor, idx) => (
        <Col md={3} key={idx} className="mb-3">
          <Card className="bg-secondary text-warning border-warning text-center">
            <Card.Body>{sponsor}</Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Sponsors;
