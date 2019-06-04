import React from "react";
import { shallow } from "enzyme";
import ResumeMaker from "../Resume_Maker";

describe("ResumeMaker component", () => {
  it("starts with only ResumeMaker Page text", () => {
    const wrapper = shallow(<ResumeMaker />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("ResumeMaker Page: will be coming soon!");
  });
});
