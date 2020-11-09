import React from "react";
import renderer from "react-test-renderer";
import UploadButton from "../../components/UploadButton/UploadButton";
import { mount } from 'enzyme';
import { IconButton } from "@material-ui/core";

describe("UploadButton", () => {
  it("Snapshot", () => {
    const component = renderer.create(<UploadButton
      title="Upload" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it("onClick should be called", () => {
    const onClickMock = jest.fn();
    const wrapper = mount(<UploadButton
      onClick={onClickMock}
      title="Upload" />);

    wrapper.find(IconButton).simulate('click')
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('the button should be disabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<UploadButton
      onClick={onClickMock}
      disabled={true}
      title="Upload" />);

    expect(wrapper.find(IconButton).props().disabled).toBe(true);
  });

  it('the button should be enabled', () => {
    const onClickMock = jest.fn();

    const wrapper = mount(<UploadButton
      onClick={onClickMock}
      disabled={false}
      title="Upload" />);

    expect(wrapper.find(IconButton).props().disabled).toBe(false);
  });
});
