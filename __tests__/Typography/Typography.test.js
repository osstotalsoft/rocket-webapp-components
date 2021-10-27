import React from "react";
import Typography from "../../components/Typography/Typography";
import { mount } from "enzyme";

describe("Typography", () => {
  test("variant property should be equal to the default value provided", () => {
    const wrapper = mount(
      <Typography tooltip="Tooltip" align="center">
        Text to be displayed
      </Typography>
    );

    expect(wrapper.props().variant).toBe("inherit");
  });
});
