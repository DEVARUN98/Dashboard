import React from "react";
import { Card } from "react-bootstrap";
import IMAGES from "./Images";

function CardComponent() {
  return (
    <Card style={{ width: "10rem", height: "10rem" }}>
      <Card.Img src={IMAGES.media} />
      <Card.Body>
        <Card.Title className="text-center mb-0">John Doe</Card.Title>
        <Card.Text className="text-center mb-0">CEO</Card.Text>
        <div className="row">
          <div className="col-4">
            <img src={IMAGES.facebook} alt="" />
          </div>
          <div className="col-4">
            <img src={IMAGES.instagram} alt="" />
          </div>
          <div className="col-4">
            <img src={IMAGES.twitter} alt="" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
