import React from "react";

class ResumeMaker extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "ResumeMaker Page: will come up soon!"
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default ResumeMaker;