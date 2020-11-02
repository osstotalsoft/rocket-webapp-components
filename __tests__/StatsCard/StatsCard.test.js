import React from "react";
import renderer from "react-test-renderer";
import StatsCard from "../../components/StatsCard/StatsCard";
import Work from "@material-ui/icons/Work";
import Update from "@material-ui/icons/Update";

describe("StatsCard", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <StatsCard
        Icon={Update}
        iconColor="green"
        title={"Title"}
        StatIcon={Work}
        description={"Description"}
        statText={"State text"}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
