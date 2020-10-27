import React from "react";
import renderer from "react-test-renderer";
import NavPills from "../../components/NavPills/NavPills";
import AddButton from "../../components/AddButton/AddButton";

describe("Render NavPills", () => {
  it("render correctly NavPills component", () => {
    const tabsArray = [
      {
        tabButton: "Button1",
        tabContent: <div>Content1</div>
      },
      {
        tabButton: "Button2",
        tabContent: <div>Content2</div>
      }
    ];

    const component = renderer.create(
      <NavPills
        label="NavPills"
        color="primary"
        active={0}
        tabs={tabsArray}
        onChange={() => {}}
        actions={[<AddButton onClick={() => {}} />]}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
