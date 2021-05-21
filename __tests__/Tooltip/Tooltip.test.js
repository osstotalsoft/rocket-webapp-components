import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "../../components/Tooltip/Tooltip";
import Button from "../../components/Button/Button";

describe("Tooltip", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <Tooltip title="Tooltip">
        <Button>Hover on me</Button>
      </Tooltip>
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
