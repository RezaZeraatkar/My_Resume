import React from "react";
import Card from "react-bootstrap/Card";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPaperPlane,
  faPhone,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Divider from "../MyCustomComponents/Divider";
import GoogleMapComponent from "../GoogleMap/googleMap";
import SectionTitle1 from "../MyCustomComponents/SectionTitle1";
import SectionTitle4 from "../MyCustomComponents/SectionTitle4";
import EmailForm from "../EmailForm/emailForm.js";

function ContactMe() {
  return (
    <Scrollbars style={{ height: "610px" }}>
      <Card
        id="contact"
        bg="light"
        border="info"
        style={{ marginBottom: "10px" }}
      >
        <Card.Body>
          <SectionTitle1>Contact Me</SectionTitle1>
          <Divider />
          <GoogleMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYozMUQyFRIiX5oMV-5ag_nW6XAOfp980&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <SectionTitle4>
            <FontAwesomeIcon style={{ fontSize: "14px" }} icon={faMap} />
            <p>Address</p>
          </SectionTitle4>
          <p>My Address Here</p>
          <SectionTitle4>
            <FontAwesomeIcon style={{ fontSize: "14px" }} icon={faPhone} />
            <p>Phone</p>
          </SectionTitle4>
          <p>09354672750</p>
          <SectionTitle4>
            <FontAwesomeIcon style={{ fontSize: "14px" }} icon={faEnvelope} />
            <p>E-Mail</p>
          </SectionTitle4>
          <p>r.zeraatkar1992@gmail.com</p>
          <SectionTitle4>
            <FontAwesomeIcon style={{ fontSize: "14px" }} icon={faPaperPlane} />
            <p>Send Me A Message</p>
          </SectionTitle4>
          <EmailForm />
        </Card.Body>
      </Card>
    </Scrollbars>
  );
}

export default ContactMe;
