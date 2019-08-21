import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles.css";

const AnimatedSwitch = ({
  animationClassName,
  animationTimeout,
  children,
  slideIn
}) => (
  <Route key={location.key}>
    <TransitionGroup
      style={{
        flex: 1,
        position: "relative"
      }}
    >
      <CSSTransition in={slideIn} timeout={300} classNames="page-slide">
        <Switch location={location}>{children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  </Route>
);

export default AnimatedSwitch;
