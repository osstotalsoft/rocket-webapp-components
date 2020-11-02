import React from "react";
import renderer from "react-test-renderer";
import IconButton from "../../components/IconButton/IconButton";
import { Clear } from "@material-ui/icons";

describe("IconButton", () => {
  it("render correctly IconButton component", () => {
    const component = renderer.create(
      <IconButton size="small" tooltip="Clear data" disabled={false}>
        <Clear />
      </IconButton>
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
