##### Copy this snapshot in the overview panel

```js
import React, { useState, useCallback } from "react";
import NavPills from "@bit/totalsoft_oss.react-mui.nav-pills";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const App = () => {
	const [activeTab, setActiveValue] = useState(0);
	const classes = useStyles();

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
			tabButton: "Item one",
			tabContent: <div>Item one</div>
		},
		{
			tabButton: "Item two",
			tabContent: <div>Item two</div>
		},
		{
			tabButton: "Item three",
			tabContent: <div>Item three</div>
		}
	];

	return (
		<div className={classes.root}>
				<NavPills
					label="NavPills"
					color="success"
					active={activeTab}
					tabs={tabsArray}
					onChange={handleTabChange}
					alignCenter
				/>
		</div>
	);
};

export default <App />;
```
