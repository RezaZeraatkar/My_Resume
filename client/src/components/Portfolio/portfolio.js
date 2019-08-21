import React from "react";
import Card from "react-bootstrap/Card";
import { Scrollbars } from "react-custom-scrollbars";
import Divider from "../MyCustomComponents/Divider";
import SectionTitle1 from "../MyCustomComponents/SectionTitle1";
import ImgContainer from "../MyCustomComponents/ImgContainer";
import ImgItem from "../MyCustomComponents/ImgItem";
import ImgLink from "../MyCustomComponents/ImgLink";
import ImgOverlay from "../MyCustomComponents/ImgOverlay";
import OvelayContent from "../MyCustomComponents/OvelayContent";

import ImgSrc1 from "../../images/por1.jpg";
import ImgSrc2 from "../../images/por2.jpg";

function Portfolio() {
  return (
    <Scrollbars style={{ height: "610px" }}>
      <Card
        id="portfolio"
        bg="light"
        border="info"
        style={{ marginBottom: "10px" }}
      >
        <Card.Body>
          <SectionTitle1>Portfolio</SectionTitle1>
          <Divider />
          <ImgContainer>
            <ImgItem>
              <ImgLink backImg={ImgSrc1} href="#">
                <ImgOverlay>
                  <OvelayContent>
                    <h2>Title</h2>
                    <Divider />
                  </OvelayContent>
                </ImgOverlay>
              </ImgLink>
            </ImgItem>
            <ImgItem>
              <ImgLink backImg={ImgSrc2} href="#">
                <ImgOverlay>
                  <OvelayContent>
                    <h2>Title</h2>
                    <Divider />
                  </OvelayContent>
                </ImgOverlay>
              </ImgLink>
            </ImgItem>
          </ImgContainer>
        </Card.Body>
      </Card>
    </Scrollbars>
  );
}

export default Portfolio;
