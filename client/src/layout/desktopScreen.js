import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { AnimatedSwitch, AnimatedRoute } from './AnimatedRoutes';
import NavList from "../components/NavList/navList";
import Profile from "../components/Profile/profile";
import BouncyDiv from "../components/MyCustomComponents/Bouncy";

import Resume from "../components/Resume/resume";
import Skills from "../components/Skills/skills";
import Portfolio from "../components/Portfolio/portfolio";
import ContactMe from "../components/ContactMe/contactMe";
import Home from "../components/Home/home";
import NotFoundComponent from "../components/NotFoundComponent/notFoundComponent";

import "./styles.css";

function RenderDesktop(props) {
  const { routerProps } = props;
  const [pageRoute, setPageRoute] = useState(
    routerProps.routerProps.location.pathname.split("/")[1]
  );

  useEffect(() => {
    const handleHomeStyle = () => {
      setPageRoute(routerProps.routerProps.location.pathname.split("/")[1]);
    };
    handleHomeStyle();
  });

  return (
    <Container>
      <Row style={{ height: "40px" }} />
      {pageRoute !== "" ? (
        <Row>
          {/* SidebarSection */}
          <Col lg={2} xl={2}>
            <BouncyDiv>
              <NavList pageRoute={pageRoute} />
            </BouncyDiv>
          </Col>
          {/* Profile Section */}
          <Col lg={5} xl={5}>
            <BouncyDiv>
              <Profile />
            </BouncyDiv>
          </Col>
          {/* Main Section */}
          <Col lg={5} xl={5}>
            <BouncyDiv>
              <TransitionGroup>
                <CSSTransition
                  key={routerProps.routerProps.location.pathname.split("/")[1]}
                  timeout={500}
                  classNames="page"
                  unmountOnExit
                  mountOnEnter
                >
                  <div className="page">
                    <Switch location={props.location}>
                      <Route key="/" exact path="/" component={Home} />
                      <Route
                        key="/skills"
                        exact
                        path="/skills"
                        component={Skills}
                      />
                      <Route
                        key="/portfolio"
                        exact
                        path="/portfolio"
                        component={Portfolio}
                      />
                      <Route
                        key="/resume"
                        exact
                        path="/resume"
                        component={Resume}
                      />
                      <Route
                        key="/contact"
                        exact
                        path="/contact"
                        component={ContactMe}
                      />
                      <Route component={NotFoundComponent} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </BouncyDiv>
          </Col>
        </Row>
      ) : (
        <>
          <Row>
            {/* SidebarSection */}
            <Col lg={2} xl={2} />
            <Col lg={2} xl={2}>
              <BouncyDiv>
                <NavList pageRoute={pageRoute} />
              </BouncyDiv>
            </Col>
            {/* Profile Section */}
            <Col lg={6} xl={5}>
              <BouncyDiv>
                <Profile />
              </BouncyDiv>
            </Col>
            <Col lg={2} xl={2} />
          </Row>
        </>
      )}
      <Row style={{ height: "20px" }} />
    </Container>
  );
}

export default RenderDesktop;
