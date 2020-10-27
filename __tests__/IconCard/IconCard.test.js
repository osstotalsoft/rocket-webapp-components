import React from "react";
import renderer from "react-test-renderer";
import IconCard from "../../components/IconCard/IconCard";
import MailOutline from "@material-ui/icons/MailOutline";

describe("Render IconCard", () => {
  it("render correctly IconCard component", () => {
    const component = renderer.create(
      <IconCard
        icon={MailOutline}
        iconColor="theme"
        title="Title card"
        subtitle="Subtitle card"
        footer="Footer card"
        content={"Content of the card"}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
