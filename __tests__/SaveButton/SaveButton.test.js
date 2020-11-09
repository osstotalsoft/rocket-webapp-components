import React from "react";
import renderer from "react-test-renderer";
import SaveButton from "../../components/SaveButton/SaveButton";
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe("SaveButton", () => {
  it("Snapshot", () => {
    const onClickMock = jest.fn();
    const component = renderer.create(<SaveButton
      title="Save"
      onClick={onClickMock} />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it("onClick should be called", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<SaveButton
      title="Save"
      onClick={onClickMock} />);

    wrapper.find(IconButton).simulate('click')
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('the button should be disabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<SaveButton
      title="Save"
      disabled={true}
      onClick={onClickMock} />);

    expect(wrapper.find(IconButton).props().disabled).toBe(true);
  });

  it('the button should be enabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<SaveButton
      title="Save"
      disabled={false}
      onClick={onClickMock} />);

    expect(wrapper.find(IconButton).props().disabled).toBe(false);
  });

  it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<SaveButton
      title="Save"
      disabled={false}
      onClick={onClickMock} />);

    expect(wrapper.props().color).toBe('theme');
    expect(wrapper.props().fontSize).toBe('small');
    expect(wrapper.props().size).toBe('medium');
  });
});