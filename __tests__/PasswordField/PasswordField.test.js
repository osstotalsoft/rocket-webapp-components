import React from "react";
import PasswordField from "../../components/PasswordField/PasswordField";
import { mount } from 'enzyme';
import IconButton from "../../components/IconButton/IconButton";
import CustomTextField from "../../components/CustomTextField/CustomTextField";

describe("PasswordField", () => {
  it("default props should be provided", () => {
    const wrapper = mount(
      <PasswordField />
    );

    expect(wrapper.props().hidePasswordText).toBe("Hide password")
    expect(wrapper.props().showPasswordText).toBe("Show password text")
  });

  it("after pressing the button the input should turn into a text field", () => {
    const wrapper = mount(
      <PasswordField
        hidePasswordText="Hide password"
        showPasswordText="Show password text" />
    );

    expect(wrapper.find(CustomTextField).props().inputProps.type).toBe('password')

    wrapper.find(IconButton).simulate('click');

    expect(wrapper.find(CustomTextField).props().inputProps.type).toBe('text')
  });
});
