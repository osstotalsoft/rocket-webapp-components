##### Copy this snapshot in the overview panel

```js
import React from "react";
import FileUploadButton from "@bit/totalsoft_oss.react-mui.file-upload-button";
import IconButton from npm "@bit/totalsoft_oss.react-mui.icon-button"

export default (
  <FileUploadButton
    component={IconButton}
    accept="image/*"
    disabled={false}
    maxSize={512000}
    minSize={5120}
  />
);
```