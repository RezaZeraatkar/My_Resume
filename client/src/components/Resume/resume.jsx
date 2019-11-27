import React from 'react';
import Card from 'react-bootstrap/Card';
import { Scrollbars } from 'react-custom-scrollbars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faTag } from '@fortawesome/free-solid-svg-icons';
import DoubleBorderFrame from '../MyCustomComponents/TextFrame';
import SectionTitle1 from '../MyCustomComponents/SectionTitle1';
import SectionTitle2 from '../MyCustomComponents/SectionTitle2';
import ScrollbarsWrapper from '../MyCustomComponents/ScrollbarsWrapper';
import Font from '../MyCustomComponents/Font';

function Resume(props) {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <>
          <Card
            id="resume"
            bg="light"
            border="info"
            style={{ marginBottom: '10px', padding: '10px' }}
          >
            <Card.Body>
              <SectionTitle1>
                <Font
                  fontSpace={2}
                  fs={22}
                  textTransform="uppercase"
                  fontWeight={700}
                >
                  Resume
                </Font>
              </SectionTitle1>

              <SectionTitle2>
                <FontAwesomeIcon icon={faUniversity} />
                <p>Education</p>
              </SectionTitle2>
              <DoubleBorderFrame>
                <SectionTitle1 borderBottomColor="#CCCCCC">
                  Bacholar Degree Of Information Technology
                  <p>
                    birjand university of science and technology (2011-2015)
                  </p>
                </SectionTitle1>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
              </DoubleBorderFrame>
              <DoubleBorderFrame>
                <SectionTitle1 borderBottomColor="#CCCCCC">
                  Master Of E-Commerce
                  <p>Iran university of science and technology (2017-2020)</p>
                </SectionTitle1>
                {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
              </DoubleBorderFrame>
            </Card.Body>
            <Card.Body>
              <SectionTitle2>
                <FontAwesomeIcon icon={faTag} />
                <p>Work Experience</p>
              </SectionTitle2>
              <DoubleBorderFrame>
                <SectionTitle1 borderBottomColor="#CCCCCC">
                  English Translator At{' '}
                  <a href="https://www.tarjomic.com" target="blank">
                    Tarjomic.com
                  </a>
                  <p>For Two Years</p>
                </SectionTitle1>

                {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
              </DoubleBorderFrame>
            </Card.Body>
          </Card>
        </>
      ) : (
        <ScrollbarsWrapper>
          <Scrollbars style={{ height: '610px' }}>
            <Card
              id="resume"
              bg="light"
              border="info"
              style={{ marginBottom: '10px', padding: '10px' }}
            >
              <Card.Body>
                <SectionTitle1>
                  <Font
                    fontSpace={2}
                    fs={22}
                    textTransform="uppercase"
                    fontWeight={700}
                  >
                    Resume
                  </Font>
                </SectionTitle1>

                <SectionTitle2>
                  <FontAwesomeIcon icon={faUniversity} />
                  <p>Education</p>
                </SectionTitle2>
                <DoubleBorderFrame>
                  <SectionTitle1 borderBottomColor="#CCCCCC">
                    Bacholar Degree Of Information Technology
                    <p>
                      birjand university of science and technology (2011-2015)
                    </p>
                  </SectionTitle1>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
                </DoubleBorderFrame>
                <DoubleBorderFrame>
                  <SectionTitle1 borderBottomColor="#CCCCCC">
                    Master Of E-Commerce
                    <p>Iran university of science and technology (2017-2020)</p>
                  </SectionTitle1>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
                </DoubleBorderFrame>
              </Card.Body>
              <Card.Body>
                <SectionTitle2>
                  <FontAwesomeIcon icon={faTag} />
                  <p>Work Experience</p>
                </SectionTitle2>
                <DoubleBorderFrame>
                  <SectionTitle1 borderBottomColor="#CCCCCC">
                    English Translator At{' '}
                    <a href="https://www.tarjomic.com" target="blank">
                      Tarjomic.com
                    </a>
                    <p>For Two Years</p>
                  </SectionTitle1>

                  {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
                </DoubleBorderFrame>
              </Card.Body>
            </Card>
          </Scrollbars>
        </ScrollbarsWrapper>
      )}
    </>
  );
}

export default Resume;
