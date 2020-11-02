import React from "react";
import renderer from "react-test-renderer";
import Forbidden from "../../components/Forbidden/Forbidden";
import { mount } from 'enzyme';
import { Card } from "@material-ui/core";
import Typography from "../../components/Typography";

describe("Forbidden", () => {
  it("Snapshot", () => {
    const component = renderer.create(<Forbidden />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it("classes cardHeader, cardAvatar should be present", () => {
    const wrapper = mount(<Forbidden />);

    expect(wrapper.find(Card).props().className).toContain('cardStyle')
    expect(wrapper.find(Card).find(Typography).props().className).toContain('textStyle')
  });
});
