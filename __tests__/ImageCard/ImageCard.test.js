import React from "react";
import ImageCard from "../../components/ImageCard/ImageCard";
import AssignmentLate from "@material-ui/icons/AssignmentLate";
import { mount } from 'enzyme';

describe("Render ImageCard", () => {
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
