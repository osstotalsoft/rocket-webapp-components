import React from "react";
import UpwardButton from "../../components/UpwardButton/UpwardButton";
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe("UpwardButton", () => {
  it("onClick should be called", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<UpwardButton
      onClick={onClickMock}
      title="Upward" />);

    wrapper.find(IconButton).simulate('click')
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('the button should be disabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<UpwardButton
      onClick={onClickMock}
      disabled={true}
      title="Upward" />);

    expect(wrapper.find(IconButton).props().disabled).toBe(true);
  });

  it('the button should be enabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<UpwardButton
      onClick={onClickMock}
      disabled={false}
      title="Upward" />);

    expect(wrapper.find(IconButton).props().disabled).toBe(false);
  });

  it('the color, fontSize and size props should be equal to the default values if they are not provided', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<UpwardButton
      onClick={onClickMock}
      disabled={false}
      title="Upward" />);

    expect(wrapper.props().color).toBe('theme');
    expect(wrapper.props().fontSize).toBe('small');
    expect(wrapper.props().size).toBe('medium');
  });
});
