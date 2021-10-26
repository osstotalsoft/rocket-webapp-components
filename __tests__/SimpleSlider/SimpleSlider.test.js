import React from "react";
import renderer from "react-test-renderer";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";

jest.mock('react-dom', () => ({
  findDOMNode: (instance) => {
    return { ownerDocument: instance };
  },
}));

describe("SimpleSlider", () => {
  it("Snapshot", () => {
    let eventListenerFn = jest.fn();
    const component = renderer.create(
      <SimpleSlider
        fullWidth
        required
        value={null}
        min={0}
        max={100}
        step={1}
        label={"Simple slider"}
        disabled={false}
        onChange={() => { }}
        decimalScale={2}
        showSliderLimits={true}
      />, {
      createNodeMock: (element) => {
        if (element.type === 'span') {
          return {
            addEventListener: eventListenerFn,
          };
        }
      }
    }
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
