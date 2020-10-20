##### Copy this snapshot in the overview panel

```js
import React from "react";
import StatsCard from "@bit/totalsoft_oss.react-mui.stats-card";
import Work from "@material-ui/icons/Work";
import Update from "@material-ui/icons/Update";

export default (
  <StatsCard
    Icon={Update}
    iconColor="green"
    title={"Title"}
    StatIcon={Work}
    description={"Description"}
    statText={"State text"}
  />
);
```
