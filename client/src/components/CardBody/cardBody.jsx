import React from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Divider from "../MyCustomComponents/Divider";

function CardBody() {
  return (
    <>
      <Card.Title>Card Title</Card.Title>
      <Divider />
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
      <Alert
        style={{
          backgroundColor: "#45B0AE",
          border: "none",
          color: "#eee",
          fontSize: "12px"
        }}
      >
        Email: r.zeraatkar1992@gmail.com | Phone: 09354672750
      </Alert>
    </>
  );
}

export default CardBody;
