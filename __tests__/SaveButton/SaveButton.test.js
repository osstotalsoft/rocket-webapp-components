import React from "react";
import renderer from "react-test-renderer";
import SaveButton from "../../components/SaveButton/SaveButton";

describe("Render SaveButton", () => {
  it("render correctly SaveButton component", () => {
    const component = renderer.create(<SaveButton title="Save" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
