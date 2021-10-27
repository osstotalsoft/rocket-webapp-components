import React from "react";
import IconCollapseCard from "../../components/IconCollapseCard/IconCollapseCard";
import AssignmentLate from "@material-ui/icons/AssignmentLate";
import { mount } from 'enzyme';
import { Accordion } from "@material-ui/core";

describe("IconCollapseCard", () => {
  it("iconColor should be equal to default value", () => {
    const wrapper = mount(
      <IconCollapseCard
        icon={AssignmentLate}
        title={"Title card"}
        content={"Content card"}
        footer={"Footer card"}
      />
    );

    expect(wrapper.props().iconColor).toBe("theme")
  });

  it("if canExpand is undefined then Accordion is by default expandable and enabled", () => {
    const wrapper = mount(
      <IconCollapseCard
        icon={AssignmentLate}
        title={"Title card"}
        content={"Content card"}
        footer={"Footer card"}
      />
    );

    expect(wrapper.find(Accordion).props().disabled).toBe(false)
    expect(wrapper.find(Accordion).props().className).toContain('accordionRoot')
  });

  it("if canExpand is false then Accordion is by default not-expandable and disabled", () => {
    const wrapper = mount(
      <IconCollapseCard
        icon={AssignmentLate}
        title={"Title card"}
        content={"Content card"}
        footer={"Footer card"}
        canExpand={false}
      />
    );

    expect(wrapper.find(Accordion).props().expanded).toBe(false)
  });
});
