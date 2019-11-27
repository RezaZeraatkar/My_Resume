import React from 'react';
import Card from 'react-bootstrap/Card';
import { Scrollbars } from 'react-custom-scrollbars';
import SectionTitle1 from '../MyCustomComponents/SectionTitle1';
import ImgContainer from '../MyCustomComponents/ImgContainer';
import ImgItem from '../MyCustomComponents/ImgItem';
import ImgLink from '../MyCustomComponents/ImgLink';
import ImgOverlay from '../MyCustomComponents/ImgOverlay';
import OvelayContent from '../MyCustomComponents/OvelayContent';
import Font from '../MyCustomComponents/Font';

import ImgSrc1 from '../../images/por1.jpg';
import ImgSrc2 from '../../images/por2.jpg';
import ScrollbarsWrapper from '../MyCustomComponents/ScrollbarsWrapper';

function Portfolio(props) {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <Card
          id="portfolio"
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
                Portfolio
              </Font>
            </SectionTitle1>
            <ImgContainer>
              <ImgItem>
                <ImgLink backImg={ImgSrc1} href="#">
                  <ImgOverlay>
                    <OvelayContent>
                      <h2>Title</h2>
                    </OvelayContent>
                  </ImgOverlay>
                </ImgLink>
              </ImgItem>
              <ImgItem>
                <ImgLink backImg={ImgSrc2} href="#">
                  <ImgOverlay>
                    <OvelayContent>
                      <h2>Title</h2>
                    </OvelayContent>
                  </ImgOverlay>
                </ImgLink>
              </ImgItem>
            </ImgContainer>
          </Card.Body>
        </Card>
      ) : (
        <ScrollbarsWrapper>
          <Scrollbars style={{ height: '610px' }}>
            <Card
              id="portfolio"
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
                    Portfolio
                  </Font>
                </SectionTitle1>
                <ImgContainer>
                  <ImgItem>
                    <ImgLink backImg={ImgSrc1} href="#">
                      <ImgOverlay>
                        <OvelayContent>
                          <h2>A Sample mobile Web Application</h2>
                        </OvelayContent>
                      </ImgOverlay>
                    </ImgLink>
                  </ImgItem>
                  <ImgItem>
                    <ImgLink backImg={ImgSrc2} href="#">
                      <ImgOverlay>
                        <OvelayContent>
                          <h2>Title</h2>
                        </OvelayContent>
                      </ImgOverlay>
                    </ImgLink>
                  </ImgItem>
                </ImgContainer>
              </Card.Body>
            </Card>
          </Scrollbars>
        </ScrollbarsWrapper>
      )}
    </>
  );
}

export default Portfolio;
