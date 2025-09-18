import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Calendar, Users, Cpu, Zap, Trophy } from "lucide-react";

const events = [
  { name: "RoboWars", icon: <Cpu />, date: "March 15", participants: "200+" },
  { name: "AI Challenge", icon: <Zap />, date: "March 16", participants: "150+" },
  { name: "Code Marathon", icon: <Trophy />, date: "March 17", participants: "300+" },
];

const Events = () => {
  return (
    <section id="events" className="py-5 bg-dark text-light">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-warning">Featured Events</h2>
        <p>Join us for three days of innovation, competition, and excellence</p>
      </div>
      <Row>
        {events.map((event, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="bg-secondary text-light border-warning h-100">
              <Card.Body>
                <div className="mb-3 text-warning">{event.icon}</div>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>
                  <Calendar size={16} /> {event.date} <br />
                  <Users size={16} /> {event.participants} participants
                </Card.Text>
                <Button variant="outline-warning">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Events;
