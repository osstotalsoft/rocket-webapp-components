import React from "react";
import renderer from "react-test-renderer";
import ToastContainer from "../../components/Toast/ToastContainer";

describe("ToastContainer", () => {
  it("Snapshot", () => {
    const component = renderer.create(<ToastContainer />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
