##### Copy this snapshot in the overview panel

```js
import React, {useState, useCallback} from "react";
import NavPills from "@bit/totalsoft_oss.react-mui.nav-pills";

const App = () => {
  const [activeTab, setActiveValue] = useState(0);

  const handleTabChange = useCallback(
    (_event, active) => {
      if (active !== activeTab) {
        setActiveValue(active);
      }
    },
    [activeTab]
  );

  let tabsArray = [
    {
      tabButton: "Button1",
      tabContent: <div>Content1</div>
    },
    {
      tabButton: "Button2",
      tabContent: <div>Content2</div>
    }
  ];
  
  return (
    <NavPills
      label="NavPills"
      color="primary"
      active={activeTab}
      tabs={tabsArray}
      onChange={handleTabChange}
    />
  );
};

export default <App />;
```
