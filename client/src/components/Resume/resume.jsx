import React from "react";
import Card from "react-bootstrap/Card";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import Divider from "../MyCustomComponents/Divider";
import DoubleBorderFrame from "../MyCustomComponents/TextFrame";
import SectionTitle1 from "../MyCustomComponents/SectionTitle1";
import SectionTitle2 from "../MyCustomComponents/SectionTitle2";

function Resume() {
  return (
    <div>
      <Scrollbars style={{ height: "610px" }}>
        <Card
          id="resume"
          bg="light"
          border="info"
          style={{ marginBottom: "10px" }}
        >
          <Card.Body>
            <SectionTitle1>Resume</SectionTitle1>
            <Divider />
            <SectionTitle2>
              <FontAwesomeIcon icon={faUniversity} />
              <p>Card Title</p>
            </SectionTitle2>
            <DoubleBorderFrame>
              <h5>header</h5>
              <Divider />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </DoubleBorderFrame>
          </Card.Body>
          <Card.Body>
            <SectionTitle2>
              <FontAwesomeIcon icon={faUniversity} />
              <p>Card Title</p>
            </SectionTitle2>
            <DoubleBorderFrame>
              <h5>header</h5>
              <Divider />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </DoubleBorderFrame>
          </Card.Body>
          <Card.Body>
            <SectionTitle2>
              <FontAwesomeIcon icon={faUniversity} />
              <p>Card Title</p>
            </SectionTitle2>
            <DoubleBorderFrame>
              <h5>header</h5>
              <Divider />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </DoubleBorderFrame>
          </Card.Body>
          <Card.Body>
            <SectionTitle2>
              <FontAwesomeIcon icon={faUniversity} />
              <p>Card Title</p>
            </SectionTitle2>
            <DoubleBorderFrame>
              <h5>header</h5>
              <Divider />
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </DoubleBorderFrame>
          </Card.Body>
        </Card>
      </Scrollbars>
    </div>
  );
}

export default Resume;
