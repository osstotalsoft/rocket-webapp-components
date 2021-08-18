import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Autocomplete from "../../components/Autocomplete/Autocomplete";
import { emptyFunction } from "../../utils/constants";

// although we are importing act right, we are still getting a warning in the console
// might be related to this issue https://github.com/enzymejs/enzyme/issues/2370
const { act } = renderer;

const options = [
  { id: "1", name: "Approved" },
  { id: "2", name: "Cancelled" }
];

const primitiveOptions = ["Approved", "Cancelled"];

describe("Autocomplete", () => {
  it("snapshot", () => {
    const component = renderer.create(
      <Autocomplete
        fullWidth
        label={"Status"}
        options={options}
        simpleValue
        isClearable
        value={""}
        onChange={jest.fn()}
      />
    );

    const json = component.toJSON();

    expect(json).toMatchSnapshot();
  });

  it("renders all the options", () => {
    const wrapper = mount(
      <Autocomplete
        label={"Status"}
        options={options}
        simpleValue
        value={"2"}
        open
        onChange={jest.fn()}
      />
    );

    expect(wrapper.find("li").length).toEqual(options.length);
  });

  it("the correct option is selected", () => {
    const wrapper = mount(
      <Autocomplete
        label={"Status"}
        options={options}
        simpleValue
        value={"2"}
        open
        onChange={jest.fn()}
      />
    );

    expect(
      wrapper
        .find("li")
        .at(1)
        .props()["aria-selected"]
    ).toEqual(true);
  });

  it("renders the clear button when clearable", () => {
    const wrapper = mount(
      <Autocomplete
        label={"Status"}
        options={options}
        isClearable
        simpleValue
        value={"2"}
        open
        onChange={jest.fn()}
      />
    );

    expect(
      wrapper.find("button.MuiAutocomplete-clearIndicator").length
    ).toEqual(1);
  });

  it("loads options at mount when defaultOptions is true", () => {
    const loadOptions = jest
      .fn()
      .mockImplementation(() => new Promise(emptyFunction));

    mount(
      <Autocomplete
        label={"Status"}
        simpleValue
        onChange={jest.fn()}
        loadOptions={loadOptions}
        defaultOptions
      />
    );

    expect(loadOptions).toBeCalled();
  });

  it("doesn't load options at mount if defaultOptions is not true", () => {
    const loadOptions = jest
      .fn()
      .mockImplementation(() => new Promise(emptyFunction));

    mount(
      <Autocomplete
        label={"Status"}
        simpleValue
        onChange={jest.fn()}
        loadOptions={loadOptions}
      />
    );

    expect(loadOptions).not.toBeCalled();
  });

  it("when simpleValue is falsy and the options are objects, displays value[labelKey] in the input", () => {
    const wrapper = mount(
      <Autocomplete
        label={"Status"}
        options={options}
        value={options[0]}
        onChange={jest.fn()}
      />
    );

    const input = wrapper.find("input").at(0);

    expect(input.props().value).toEqual(options[0].name);
  });

  it("works for primitive options", () => {
    const wrapper = mount(
      <Autocomplete
        label={"Status"}
        options={primitiveOptions}
        value={"Cancelled"}
        open
        onChange={jest.fn()}
      />
    );

    const input = wrapper.find("input").at(0);

    expect(
      wrapper
        .find("li")
        .at(1)
        .props()["aria-selected"]
    ).toEqual(true);
    expect(input.props().value).toEqual("Cancelled");
  });

  it("calls the onChange function provided as a prop", () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Autocomplete
        label={"Status"}
        options={options}
        simpleValue
        isClearable
        value={"2"}
        open
        onChange={onChange}
      />
    );

    act(() => {
      wrapper
        .find("li")
        .at(0)
        .props()
        .onClick({ currentTarget: { getAttribute: () => 0 } });
    });

    expect(onChange).toBeCalled();
  });
});
