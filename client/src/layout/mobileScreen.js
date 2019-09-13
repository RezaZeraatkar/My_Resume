import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Profile from '../components/Profile/profile';
import Resume from '../components/Resume/resume';
import Skills from '../components/Skills/skills';
import Portfolio from '../components/Portfolio/portfolio';
import ContactMe from '../components/ContactMe/contactMe';
import RootContainer from '../components/MyCustomComponents/RootContainer';
import BouncyDiv from '../components/MyCustomComponents/Bouncy';

// import Header from '../components/Header/header';

function RenderMobile() {
  return (
    <RootContainer>
      <Container>
        {/* For Small and Mobile Devices  */}
        {/* <Row>
      <Header />
    </Row> */}
        <Row>
          <Col md={12} xs={12} sm={12}>
            <BouncyDiv>
              <Profile />
            </BouncyDiv>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} sm={12}>
            <Resume isMobile />
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} sm={12}>
            <Skills isMobile />
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} sm={12}>
            <Portfolio isMobile />
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} sm={12}>
            <ContactMe isMobile />
          </Col>
        </Row>
        <Row style={{ height: '20px' }} />
      </Container>
    </RootContainer>
  );
}

export default RenderMobile;
