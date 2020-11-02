import React from "react";
import renderer from "react-test-renderer";
import Typography from "../../components/Typography/Typography";
import { mount } from 'enzyme';

describe("Typography", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <Typography tooltip="Tooltip" variant="body1" align="center">
        Text to be displayed
      </Typography>
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it("varaint property shoulb be equalt to the default value provided", () => {
    const wrapper = mount(
      <Typography tooltip="Tooltip" align="center">
        Text to be displayed
      </Typography>
    );

    expect(wrapper.props().variant).toBe("inherit");
  });
});
