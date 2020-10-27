import React from "react";
import renderer from "react-test-renderer";
import PasswordField from "../../components/PasswordField/PasswordField";

describe("Render PasswordField", () => {
  it("render correctly PasswordField component", () => {
    const component = renderer.create(
      <PasswordField
        hidePasswordText="Hide password"
        showPasswordText="Show password text"
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
