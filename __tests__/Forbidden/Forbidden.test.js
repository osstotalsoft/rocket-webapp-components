import React from "react";
import renderer from "react-test-renderer";
import Forbidden from "../../components/Forbidden/Forbidden";

describe("Render Forbidden", () => {
  it("render correctly Forbidden component", () => {
    const component = renderer.create(<Forbidden />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
