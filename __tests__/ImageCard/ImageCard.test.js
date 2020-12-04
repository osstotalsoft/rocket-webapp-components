import React from "react";
import renderer from "react-test-renderer";
import ImageCard from "../../components/ImageCard/ImageCard";
import AssignmentLate from "@material-ui/icons/AssignmentLate";
import { mount } from 'enzyme';

describe("Render ImageCard", () => {
  it("snapshot", () => {
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

  it("imageSize should be equal to 's'", () => {
    const wrapper = mount(
      <ImageCard
        image={AssignmentLate}
        alternateText="Image card"
      />
    );

    expect(wrapper.props().imageSize).toBe("s")
  });

  it("alternateText prop should be present in the html attribute alt", () => {
    const wrapper = mount(
      <ImageCard
        image={AssignmentLate}
        alternateText="Image card"
      />
    );

    expect(wrapper.find('img').props().alt).toBe("Image card")
  });
});
