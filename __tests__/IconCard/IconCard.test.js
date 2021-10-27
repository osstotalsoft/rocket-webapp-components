import React from "react";
import IconCard from "../../components/IconCard/IconCard";
import MailOutline from "@material-ui/icons/MailOutline";
import { mount } from 'enzyme';
import { Card, CardHeader } from "@material-ui/core";

describe("IconCard", () => {
  it("classes cardStyle and textStyle should be present", () => {
    const wrapper = mount(
      <IconCard
        icon={MailOutline}
        iconColor="theme"
        title="Title card"
        subtitle="Subtitle card"
        footer="Footer card"
        content={"Content of the card"}
      />
    );

    expect(wrapper.find(CardHeader).props().classes.root).toContain('cardHeader')
    expect(wrapper.find(CardHeader).props().classes.avatar).toContain('cardAvatar')
  });

  it("if footer is provided then classFooter should be present", () => {
    const wrapper = mount(
      <IconCard
        icon={MailOutline}
        iconColor="theme"
        title="Title card"
        subtitle="Subtitle card"
        footer="Footer card"
        content={"Content of the card"}
      />
    );

    expect(wrapper.find(Card).find('div').last().props().className).toContain('cardFooter')
  });

  it("if footer is not provided then classFooter should not be present", () => {
    const wrapper = mount(
      <IconCard
        icon={MailOutline}
        iconColor="theme"
        title="Title card"
        subtitle="Subtitle card"
        content={"Content of the card"}
      />
    );

    expect(wrapper.find(Card).find('div').last().props().className).not.toContain('cardFooter')
  });
});
