import React from "react";
import { Row, Col } from "react-bootstrap";

const stats = [
  { number: "500+", label: "Participants" },
  { number: "50+", label: "Events" },
  { number: "₹10L+", label: "Prize Pool" },
  { number: "3", label: "Days" },
];

const Statistics = () => (
  <section className="py-5 bg-warning text-dark text-center">
    <Row>
      {stats.map((stat, idx) => (
        <Col key={idx}>
          <h2 className="fw-bold">{stat.number}</h2>
          <p>{stat.label}</p>
        </Col>
      ))}
    </Row>
  </section>
);

export default Statistics;
