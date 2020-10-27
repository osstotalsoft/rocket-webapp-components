import React from "react";
import renderer from "react-test-renderer";
import UploadButton from "../../components/UploadButton/UploadButton";

describe("Render UploadButton", () => {
  it("render correctly UploadButton component", () => {
    const component = renderer.create(<UploadButton title="Upload" />);

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
