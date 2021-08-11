import React from "react";
import renderer from "react-test-renderer";
import NavPills from "../../components/NavPills/NavPills";
import AddButton from "../../components/AddButton/AddButton";
import { mount } from "enzyme";
import { Tab } from "@material-ui/core";
import { emptyArray, emptyFunction } from "../../utils/constants";

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

describe("NavPills", () => {
  it("Snapshot", () => {
    const component = renderer.create(
      <NavPills
        label="NavPills"
        color="primary"
        active={0}
        tabs={tabsArray}
        onChange={emptyFunction}
        actions={[<AddButton onClick={emptyFunction} />]}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it("active, color and actions props should be equal to the default values provided", () => {
    const wrapper = mount(
      <NavPills label="NavPills" tabs={tabsArray} onChange={emptyFunction} />
    );

    expect(wrapper.props().color).toBe("primary");
    expect(wrapper.props().actions).toStrictEqual(emptyArray);
    expect(wrapper.props().active).toBe(0);
  });

  it("should have two children", () => {
    const wrapper = mount(
      <NavPills label="NavPills" tabs={tabsArray} onChange={emptyFunction} />
    );

    expect(wrapper.find(Tab)).toHaveLength(2);
  });

  it("Tabs should get the values from the tabs array provided", () => {
    const wrapper = mount(
      <NavPills label="NavPills" tabs={tabsArray} onChange={emptyFunction} />
    );

    expect(
      wrapper
        .find(Tab)
        .at(0)
        .props().label
    ).toBe(tabsArray[0].tabButton);
    expect(
      wrapper
        .find(Tab)
        .at(1)
        .props().label
    ).toBe(tabsArray[1].tabButton);
  });
});
