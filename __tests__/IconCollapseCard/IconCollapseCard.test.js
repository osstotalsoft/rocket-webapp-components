import React from "react";
import renderer from "react-test-renderer";
import IconCollapseCard from "../../components/IconCollapseCard/IconCollapseCard";
import AssignmentLate from "@material-ui/icons/AssignmentLate";

describe("Render IconCollapseCard", () => {
  it("render correctly IconCollapseCard component", () => {
    const component = renderer.create(
      <IconCollapseCard
        icon={AssignmentLate}
        iconColor="theme"
        title={"Title card"}
        content={"Content card"}
        footer={"Footer card"}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
