import React from "react";
import renderer from "react-test-renderer";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";

describe("Render SimpleSlider", () => {
  it("render correctly SimpleSlider component", () => {
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
        onChange={() => {}}
        decimalScale={2}
        showSliderLimits={true}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
