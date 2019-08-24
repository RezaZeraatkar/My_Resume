import React from "react";
import Card from "react-bootstrap/Card";
import { Scrollbars } from "react-custom-scrollbars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faLaptop, faCode } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../MyCustomComponents/SectionTitle";
import SectionTitle1 from "../MyCustomComponents/SectionTitle1";
import SectionTitle3 from "../MyCustomComponents/SectionTitle3";
import Progress from "../MyCustomComponents/Progress";
import Progressbar from "../MyCustomComponents/Progressbar";
import ScrollbarsWrapper from "../MyCustomComponents/ScrollbarsWrapper";
import Font from "../MyCustomComponents/Font";
import Text from "../MyCustomComponents/Text";

function Skills(props) {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <>
          <Card
            id="skills"
            bg="light"
            border="info"
            style={{ marginBottom: "10px" }}
          >
            <Card.Body>
              <SectionTitle1>
                <Font
                  fontSpace={2}
                  fs={22}
                  as="h2"
                  textTransform="uppercase"
                  fontWeight={700}
                >
                  Skills
                </Font>
              </SectionTitle1>
              <SectionTitle>
                <FontAwesomeIcon icon={faUsers} />
                <SectionTitle3>
                  <b>Social Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar width={90}>
                  <Text floatRight fontWeight="bold">
                    90%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533">
                  <Text floatRight fontWeight="bold">
                    100%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525">
                  <Text floatRight fontWeight="bold">
                    100%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faLaptop} />
                <SectionTitle3>
                  <b>Software Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar width={90}>
                  <Text floatRight fontWeight="bold">
                    90%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533">
                  <Text floatRight fontWeight="bold">
                    100%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525">
                  <Text floatRight fontWeight="bold">
                    100%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faCode} />
                <SectionTitle3>
                  <b>Coding Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar width={90}>
                  <Text floatRight fontWeight="bold">
                    90%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533">
                  <Text floatRight fontWeight="bold">
                    100%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525">
                  <Text floatRight fontWeight="bold">
                    100%
                  </Text>
                  <Text floatLeft>ReactJS</Text>
                </Progressbar>
              </Progress>
            </Card.Body>
          </Card>
        </>
      ) : (
        <ScrollbarsWrapper>
          <Scrollbars style={{ height: "610px" }}>
            <Card
              id="skills"
              bg="light"
              border="info"
              style={{ marginBottom: "10px" }}
            >
              <Card.Body>
                <SectionTitle1>
                  <Font
                    fontSpace={2}
                    fs={22}
                    as="h2"
                    textTransform="uppercase"
                    fontWeight={700}
                  >
                    Skills
                  </Font>
                </SectionTitle1>
                <SectionTitle>
                  <FontAwesomeIcon icon={faUsers} />
                  <SectionTitle3>
                    <b>Social Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar width={90}>
                    <Text floatRight fontWeight="bold">
                      90%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533">
                    <Text floatRight fontWeight="bold">
                      100%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525">
                    <Text floatRight fontWeight="bold">
                      100%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faLaptop} />
                  <SectionTitle3>
                    <b>Software Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar width={90}>
                    <Text floatRight fontWeight="bold">
                      90%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533">
                    <Text floatRight fontWeight="bold">
                      100%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525">
                    <Text floatRight fontWeight="bold">
                      100%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faCode} />
                  <SectionTitle3>
                    <b>Coding Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar width={90}>
                    <Text floatRight fontWeight="bold">
                      90%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533">
                    <Text floatRight fontWeight="bold">
                      100%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525">
                    <Text floatRight fontWeight="bold">
                      100%
                    </Text>
                    <Text floatLeft>ReactJS</Text>
                  </Progressbar>
                </Progress>
              </Card.Body>
            </Card>
          </Scrollbars>
        </ScrollbarsWrapper>
      )}
    </>
  );
}

export default Skills;
