import React from "react";
import Card from "react-bootstrap/Card";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLaptop, faCode } from "@fortawesome/free-solid-svg-icons";
import Divider from "../MyCustomComponents/Divider";
import SectionTitle from "../MyCustomComponents/SectionTitle";
import SectionTitle1 from "../MyCustomComponents/SectionTitle1";
import SectionTitle3 from "../MyCustomComponents/SectionTitle3";
import Progress from "../MyCustomComponents/Progress";
import Progressbar from "../MyCustomComponents/Progressbar";

function Skills() {
  return (
    <Scrollbars style={{ height: "610px" }}>
      <Card
        id="skills"
        bg="light"
        border="info"
        style={{ marginBottom: "10px" }}
      >
        <Card.Body>
          <SectionTitle1>Skills</SectionTitle1>
          <Divider />
          <SectionTitle>
            <FontAwesomeIcon icon={faUsers} />
            <SectionTitle3>Social Skills</SectionTitle3>
          </SectionTitle>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <SectionTitle>
            <FontAwesomeIcon icon={faLaptop} />
            <SectionTitle3>Software Skills</SectionTitle3>
          </SectionTitle>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <SectionTitle>
            <FontAwesomeIcon icon={faCode} />
            <SectionTitle3>Coding Skills</SectionTitle3>
          </SectionTitle>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
          <Progress>
            <Progressbar>
              <span>100%</span>
              <span>ReactJS</span>
            </Progressbar>
          </Progress>
        </Card.Body>
      </Card>
    </Scrollbars>
  );
}

export default Skills;
