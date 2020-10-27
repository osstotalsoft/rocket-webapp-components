import React from "react";
import renderer from "react-test-renderer";
import ImageCard from "../../components/ImageCard/ImageCard";
import AssignmentLate from "@material-ui/icons/AssignmentLate";

describe("Render ImageCard", () => {
  it("render correctly ImageCard component", () => {
    const component = renderer.create(
      <ImageCard
        image={AssignmentLate}
        imageSize="m"
        alternateText="Image card"
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
