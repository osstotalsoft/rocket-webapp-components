import React from "react";
import renderer from "react-test-renderer";
import NotFound from "../../components/NotFound/NotFound";

describe("Render NotFound", () => {
  it("render correctly NotFound component", () => {
    const component = renderer.create(<NotFound />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
