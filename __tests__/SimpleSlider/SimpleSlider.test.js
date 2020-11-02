import React from "react";
import renderer from "react-test-renderer";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";

describe("SimpleSlider", () => {
  it("Snapshot", () => {
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
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
