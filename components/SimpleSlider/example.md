##### Copy this snapshot in the overview panel

```js
import React, { useState } from "react";
import SimpleSlider from "@bit/totalsoft_oss.react-mui.simple-slider";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const App = () => {
	const onSliderChange = (onPropertyChange) => (_, value) => onPropertyChange(value);
	const [value, setValue] = useState(null);
	const handleSliderPropertyChange = value => setValue(value);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography id="input-slider" variant="h6">
				Temperature
      </Typography>
			<SimpleSlider
				required
				value={value}
				min={0}
				max={100}
				step={1}
				onChange={onSliderChange(handleSliderPropertyChange)}
				decimalScale={2}
				showSliderLimits
			/>
		</div>
	)
}

export default (
	<App />
);
```



##### Copy this snapshot in the overview panel

```js
import React, { useState } from "react";
import SimpleSlider from "@bit/totalsoft_oss.react-mui.simple-slider";
import VolumeUp from '@material-ui/icons/VolumeUp';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const App = () => {
	const onSliderChange = (onPropertyChange) => (_, value) => onPropertyChange(value);
	const [value, setValue] = useState(null);
	const handleSliderPropertyChange = value => setValue(value);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography id="input-slider" variant="h6">
				Volume
      </Typography>
			<Grid container spacing={2} alignItems="center">
				<Grid item>
					<VolumeUp />
				</Grid>
				<Grid item>
					<SimpleSlider
						required
						value={value}
						min={0}
						max={100}
						step={1}
						onChange={onSliderChange(handleSliderPropertyChange)}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default (
	<App />
);
```




##### Copy this snapshot in the overview panel

```js
import React, { useState } from "react";
import SimpleSlider from "@bit/totalsoft_oss.react-mui.simple-slider";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const App = () => {
	const onSliderChange = (onPropertyChange) => (_, value) => onPropertyChange(value);
	const [value, setValue] = useState(null);
	const handleSliderPropertyChange = value => setValue(value);
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography id="discrete-slider-always" variant="h6">
				Always visible
      </Typography>
			<Typography id="discrete-slider-always" variant="body2">
				You can force the thumb label to be always visible with valueLabelDisplay="on".
      </Typography>
			<SimpleSlider
				required
				value={value}
				min={0}
				max={100}
				step={1}
				onChange={onSliderChange(handleSliderPropertyChange)}
				valueLabelDisplay="on" //"auto"
				showSliderLimits
			/>
		</div>
	)
}

export default (
	<App />
);
```



##### Copy this snapshot in the overview panel

```js
import React, { useState } from "react";
import SimpleSlider from "@bit/totalsoft_oss.react-mui.simple-slider";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300,
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const App = () => {
	const onSliderChange = (onPropertyChange) => (_, value) => onPropertyChange(value);
	const [value, setValue] = useState(null);
	const handleSliderPropertyChange = value => setValue(value);
	const classes = useStyles();
	const marks = [
		{
			value: 0,
			label: '0°C',
		},
		{
			value: 20,
			label: '20°C',
		},
		{
			value: 37,
			label: '37°C',
		},
		{
			value: 100,
			label: '100°C',
		},
	];

	return (
		<div className={classes.root}>
			<Typography id="discrete-slider-custom" variant="h6">
				Custom marks
      </Typography>
			<SimpleSlider
				required
				value={value}
				step={10}
				onChange={onSliderChange(handleSliderPropertyChange)}
				valueLabelDisplay="auto"
				marks={marks}
			/>
		</div>
	)
}

export default (
	<App />
);
```