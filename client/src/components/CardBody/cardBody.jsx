import React from "react";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Divider from "../MyCustomComponents/Divider";
import Font from "../MyCustomComponents/Font";

function CardBody() {
  return (
    <>
      <Card.Title>
        <Font fs={36} as="h1">
          Hi. i'm{" "}
          <Font fontColor="#08aeac" as="span">
            {" "}
            Reza Zeraatkar!
          </Font>
        </Font>
        <Font fs={14} fontColor="#333" as="h2" fontSpace={1}>
          MERN Stack Web Developer
        </Font>
      </Card.Title>
      <Divider />
      <Card.Text>
        <Font fs={13} fontSpace={1} fontWeight={500} as="p">
          Founder of DotRex. Professional UI/UX designer and web developer based
          on London. Sometimes works as a freelancer.
        </Font>
      </Card.Text>
      <Alert
        style={{
          backgroundColor: "#40A8A6",
          border: "none",
          color: "#eee",
          fontSize: "12px"
        }}
      >
        <Font as="span" fontSpace="1" fontColor="#fff" fontWeight={600}>
          Email:
        </Font>{" "}
        r.zeraatkar1992@gmail.com /{" "}
        <Font as="span" fontSpace="1" fontColor="#fff" fontWeight={600}>
          Phone:
        </Font>{" "}
        09354672750
      </Alert>
    </>
  );
}

export default CardBody;
