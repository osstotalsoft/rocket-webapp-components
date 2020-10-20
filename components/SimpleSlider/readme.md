##### Copy this snapshot in the overview panel

```js
import React from "react";
import SimpleSlider from "@bit/totalsoft_oss.react-mui.simple-slider";

export default (
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
```
