import React from "react";
import renderer from "react-test-renderer";
import Typography from "../../components/Typography/Typography";

describe("Render Typography", () => {
  it("render correctly Typography component", () => {
    const component = renderer.create(
      <Typography tooltip="Tooltip" variant="body1" align="center">
        Text to be displayed
      </Typography>
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
