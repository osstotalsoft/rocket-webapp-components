import React from "react";
import renderer from "react-test-renderer";
import DateTime from "../../components/DateTime/DateTime";
import { mount } from "enzyme";
import { IconButton } from "@material-ui/core";
import { CalendarToday } from "@material-ui/icons";
import { KeyboardDateTimePicker } from "@material-ui/pickers";

describe("DateTime", () => {
  it("snapshot", () => {
    const onDateTimeChanged = () => {};
    const onHandleClick = () => {};
    const defaultTimeFormat = "HH:mm";

    const component = renderer.create(
      <DateTime
        value={"20190101"}
        label={"Datetime"}
        onChange={onDateTimeChanged}
        onClick={onHandleClick}
        dateFormat="DD-MMMM-YYYY"
        timeFormat={defaultTimeFormat}
        clearable={true}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it("if clearable and value are true then InputProps node will be made up of two IconButtons", () => {
    const onDateTimeChanged = jest.fn();
    const onHandleClick = jest.fn();
    const defaultTimeFormat = "HH:mm";

    const wrapper = mount(
      <DateTime
        value={"value"}
        label={"Datetime"}
        onChange={onDateTimeChanged}
        dateFormat="DD-MMMM-YYYY"
        timeFormat={defaultTimeFormat}
        clearable={true}
        onClick={onHandleClick}
      />
    );

    expect(wrapper.find(IconButton)).toHaveLength(3);
  });

  it("if clearable and value are false then InputProps node will be made of one CalendarToday node", () => {
    const onDateTimeChanged = () => {};
    const defaultTimeFormat = "HH:mm";

    const wrapper = mount(
      <DateTime
        value={null}
        label={"Datetime"}
        onChange={onDateTimeChanged}
        dateFormat="DD-MMMM-YYYY"
        timeFormat={defaultTimeFormat}
        clearable={false}
      />
    );

    expect(wrapper.find(CalendarToday)).toHaveLength(1);
  });

  it("classes defaultFont and dateTimeInput should be present", () => {
    const onDateTimeChanged = jest.fn();
    const defaultTimeFormat = "HH:mm";

    const wrapper = mount(
      <DateTime
        value={null}
        label={"Datetime"}
        onChange={onDateTimeChanged}
        dateFormat="DD-MMMM-YYYY"
        timeFormat={defaultTimeFormat}
        clearable={false}
      />
    );

    expect(wrapper.find(KeyboardDateTimePicker).props().className).toContain(
      "defaultFont"
    );
    expect(
      wrapper.find(KeyboardDateTimePicker).props().InputProps.className
    ).toContain("dateTimeInput");
  });
});
