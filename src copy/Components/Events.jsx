import { Card, Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const cards = [
  { id: 1, title: "Card 1", text: "This is the first card" },
  { id: 2, title: "Card 2", text: "This is the second card" },
  { id: 3, title: "Card 3", text: "This is the third card" },
  { id: 4, title: "Card 4", text: "This is the fourth card" },
];

export default function Events() {
  const [rotation, setRotation] = useState(0);

  const handleLeft = () => setRotation(rotation + 90);
  const handleRight = () => {
    console.log("right button clicked");

    setRotation(rotation - 90);
  };

  return (
    <div className="carousel-container">
      <Button className="arrow left" onClick={handleLeft}>
        <BsArrowLeft size={30} />
      </Button>

      <div
        className="wheel"
        style={{ transform: `translateZ(-300px) rotateY(${rotation}deg)` }}
      >
        {cards.map((card, index) => {
          const angle = index * 90;
          return (
            <Card
              key={card.id}
              className="wheel-card"
              style={{ transform: `rotateY(${angle}deg) translateZ(400px)` }}
            >
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <Button className="arrow right" onClick={handleRight}>
        <BsArrowRight size={30} />
      </Button>
    </div>
  );
}
