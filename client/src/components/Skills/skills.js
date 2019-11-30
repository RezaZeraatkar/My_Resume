import React from 'react';
import Card from 'react-bootstrap/Card';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faLaptop,
  faCode,
  faChartLine,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../MyCustomComponents/SectionTitle';
import SectionTitle1 from '../MyCustomComponents/SectionTitle1';
import SectionTitle3 from '../MyCustomComponents/SectionTitle3';
import Progress from '../MyCustomComponents/Progress';
import Progressbar from '../MyCustomComponents/Progressbar';
import ScrollbarsWrapper from '../MyCustomComponents/ScrollbarsWrapper';
import Font from '../MyCustomComponents/Font';
import ProgressPercentage from '../MyCustomComponents/ProgressPercentage';
import ProgressType from '../MyCustomComponents/ProgressType';

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
            style={{ marginBottom: '10px' }}
          >
            <Card.Body>
              <SectionTitle1>
                <Font
                  fontSpace={2}
                  fs={22}
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
                <Progressbar backColor="#3FAEAD" width={100} />
                <ProgressPercentage floatRight fontWeight="bold">
                  100%
                </ProgressPercentage>
                <ProgressType floatLeft>Flexibility & Cooperation</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={100} />
                <ProgressPercentage floatRight fontWeight="bold">
                  100%
                </ProgressPercentage>
                <ProgressType floatLeft>Communication</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={100} />
                <ProgressPercentage floatRight fontWeight="bold">
                  100%
                </ProgressPercentage>
                <ProgressType floatLeft>Problem Solving</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={100} />
                <ProgressPercentage floatRight fontWeight="bold">
                  100%
                </ProgressPercentage>
                <ProgressType floatLeft>Accountability</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={100} />
                <ProgressPercentage floatRight fontWeight="bold">
                  100%
                </ProgressPercentage>
                <ProgressType floatLeft>Teachability</ProgressType>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faCode} />
                <SectionTitle3>
                  <b>Programming Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={90} />
                <ProgressPercentage floatRight fontWeight="bold">
                  90%
                </ProgressPercentage>
                <ProgressType floatLeft>Javascript</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>Python</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>Data Structures</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>
                  Programming Design Patterns
                </ProgressType>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faLaptop} />
                <SectionTitle3>
                  <b>Web Development Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={90} />
                <ProgressPercentage floatRight fontWeight="bold">
                  90%
                </ProgressPercentage>
                <ProgressType floatLeft>ReactJS</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={90} />
                <ProgressPercentage floatRight fontWeight="bold">
                  90%
                </ProgressPercentage>
                <ProgressType floatLeft>Styled-Components</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>NodeJS</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={60} />
                <ProgressPercentage floatRight fontWeight="bold">
                  60%
                </ProgressPercentage>
                <ProgressType floatLeft>ExpressJS</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={60} />
                <ProgressPercentage floatRight fontWeight="bold">
                  60%
                </ProgressPercentage>
                <ProgressType floatLeft>MongoDB</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={60} />
                <ProgressPercentage floatRight fontWeight="bold">
                  60%
                </ProgressPercentage>
                <ProgressType floatLeft>PstgreSQL</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>MySQL</ProgressType>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faCode} />
                <SectionTitle3>
                  <b>Data Science Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={90} />
                <ProgressPercentage floatRight fontWeight="bold">
                  90%
                </ProgressPercentage>
                <ProgressType floatLeft>
                  Data Gathering/Web Scraping
                </ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={80} />
                <ProgressPercentage floatRight fontWeight="bold">
                  80%
                </ProgressPercentage>
                <ProgressType floatLeft>Data Visualization</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={80} />
                <ProgressPercentage floatRight fontWeight="bold">
                  80%
                </ProgressPercentage>
                <ProgressType floatLeft>Data Cleaning</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>Data Normalization</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>
                  Machine Learning Algorithms
                </ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>Deep Learning Algorithms</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>
                  Natural Language Processing (NLP)
                </ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>Keras/Tenserflow</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>Numpy/Pandas/Matplotlib</ProgressType>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faChartLine} />
                <SectionTitle3>
                  <b>Financial Skills</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={70} />
                <ProgressPercentage floatRight fontWeight="bold">
                  70%
                </ProgressPercentage>
                <ProgressType floatLeft>
                  Stock Market Technical Analysis
                </ProgressType>
              </Progress>
              <SectionTitle>
                <FontAwesomeIcon icon={faToolbox} />
                <SectionTitle3>
                  <b>Tools and others</b>
                </SectionTitle3>
              </SectionTitle>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={60} />
                <ProgressPercentage floatRight fontWeight="bold">
                  60%
                </ProgressPercentage>
                <ProgressType floatLeft>Git</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>Docker</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#B43525" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>webpack</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#3FAEAD" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>BabelJS</ProgressType>
              </Progress>
              <Progress>
                <Progressbar backColor="#021533" width={50} />
                <ProgressPercentage floatRight fontWeight="bold">
                  50%
                </ProgressPercentage>
                <ProgressType floatLeft>Linux</ProgressType>
              </Progress>
            </Card.Body>
          </Card>
        </>
      ) : (
        <ScrollbarsWrapper>
          <Scrollbars style={{ height: '610px' }}>
            <Card
              id="skills"
              bg="light"
              border="info"
              style={{ marginBottom: '10px' }}
            >
              <Card.Body>
                <SectionTitle1>
                  <Font
                    fontSpace={2}
                    fs={22}
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
                  <Progressbar backColor="#3FAEAD" width={100} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    100%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Flexibility & Cooperation
                  </ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={100} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    100%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Communication</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={100} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    100%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Problem Solving</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={100} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    100%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Accountability</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={100} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    100%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Teachability</ProgressType>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faCode} />
                  <SectionTitle3>
                    <b>Programming Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={90} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    90%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Javascript</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Python</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Data Structures</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Programming Design Patterns
                  </ProgressType>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faLaptop} />
                  <SectionTitle3>
                    <b>Web Development Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={90} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    90%
                  </ProgressPercentage>
                  <ProgressType floatLeft>ReactJS</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={90} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    90%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Styled-Components</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>NodeJS</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={60} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    60%
                  </ProgressPercentage>
                  <ProgressType floatLeft>ExpressJS</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={60} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    60%
                  </ProgressPercentage>
                  <ProgressType floatLeft>MongoDB</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={60} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    60%
                  </ProgressPercentage>
                  <ProgressType floatLeft>PstgreSQL</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>MySQL</ProgressType>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faCode} />
                  <SectionTitle3>
                    <b>Data Science Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={90} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    90%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Data Gathering/Web Scraping
                  </ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={80} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    80%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Data Visualization</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={80} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    80%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Data Cleaning</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Data Normalization</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Machine Learning Algorithms
                  </ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Deep Learning Algorithms
                  </ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Natural Language Processing (NLP)
                  </ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Keras/Tenserflow</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Numpy/Pandas/Matplotlib</ProgressType>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faChartLine} />
                  <SectionTitle3>
                    <b>Financial Skills</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={70} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    70%
                  </ProgressPercentage>
                  <ProgressType floatLeft>
                    Stock Market Technical Analysis
                  </ProgressType>
                </Progress>
                <SectionTitle>
                  <FontAwesomeIcon icon={faToolbox} />
                  <SectionTitle3>
                    <b>Tools and others</b>
                  </SectionTitle3>
                </SectionTitle>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={60} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    60%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Git</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Docker</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#B43525" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>webpack</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#3FAEAD" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>BabelJS</ProgressType>
                </Progress>
                <Progress>
                  <Progressbar backColor="#021533" width={50} />
                  <ProgressPercentage floatRight fontWeight="bold">
                    50%
                  </ProgressPercentage>
                  <ProgressType floatLeft>Linux</ProgressType>
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
