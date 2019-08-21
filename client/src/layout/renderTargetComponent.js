import React from "react";

import Resume from "../components/Resume/resume";
import Skills from "../components/Skills/skills";
import Portfolio from "../components/Portfolio/portfolio";
import ContactMe from "../components/ContactMe/contactMe";

function RenderTargetComponent(props) {
  const { showComponent } = props;

  switch (showComponent) {
    case "resume":
      return <Resume />;
    case "contact":
      return <ContactMe />;
    case "portfolio":
      return <Portfolio />;
    case "skills":
      return <Skills />;

    default:
      return <></>;
  }
}

export default RenderTargetComponent;
