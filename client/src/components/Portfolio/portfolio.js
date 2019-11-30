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

import ImgSrc1 from '../../images/por1.png';
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
                      <h5
                        style={{
                          border: '1px solid green',
                          padding: '50px',
                        }}
                      >
                        A Sample mobile Web Application
                      </h5>
                      <p>review books and share it with other users</p>
                      {/* <a
                        href="http://booksshelfapp.herokuapp.com/"
                        style={{ color: '#40A8A6', fontWeight: 'bold' }}
                      >
                        BookShelf Address
                      </a> */}
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
                          <h5
                            style={{
                              border: '1px solid green',
                              padding: '50px',
                            }}
                          >
                            A Sample mobile Web Application
                          </h5>
                          <p>review books and share it with other users</p>
                          {/* <a
                            href="http://booksshelfapp.herokuapp.com/"
                            style={{ color: '#40A8A6', fontWeight: 'bold' }}
                            target="_blank"
                          >
                            BookShelf Address
                          </a> */}
                        </OvelayContent>
                      </ImgOverlay>
                    </ImgLink>
                  </ImgItem>
                </ImgContainer>
                <a
                  href="http://booksshelfapp.herokuapp.com/"
                  style={{
                    color: '#40A8A6',
                    fontWeight: 'bold',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BookShelf Address
                </a>
              </Card.Body>
            </Card>
          </Scrollbars>
        </ScrollbarsWrapper>
      )}
    </>
  );
}

export default Portfolio;
