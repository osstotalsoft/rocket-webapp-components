import React from "react";
import renderer from "react-test-renderer";
import UpwardButton from "../../components/UpwardButton/UpwardButton";

describe("Render UpwardButton", () => {
  it("render correctly UpwardButton component", () => {
    const component = renderer.create(<UpwardButton title="Upward" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
