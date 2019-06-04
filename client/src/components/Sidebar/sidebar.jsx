import React from "react";

// My Components
import MyImage from "./MyImage/myimage";
import Skills from "./Skills/skills";

const Sidebar = () => (
  <div className="white text-grey card-4 padding-bottom">
    <MyImage />
    <Skills />
  </div>
);

export default Sidebar;
