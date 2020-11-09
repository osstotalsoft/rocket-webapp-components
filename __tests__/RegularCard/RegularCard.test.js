import React from "react";
import renderer from "react-test-renderer";
import RegularCard from "../../components/RegularCard/RegularCard";

describe("RegularCard", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <RegularCard
        cardTitle={"Title"}
        cardSubtitle={"Subtitle"}
        content={"Card content"}
        titleAlign="center"
        contentAlign="center"
        subtitleAlign="center"
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
