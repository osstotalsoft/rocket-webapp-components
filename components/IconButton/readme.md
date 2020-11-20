##### Copy this snapshot in the overview panel

```js
import React from "react";
import IconButton from "@bit/totalsoft_oss.react-mui.icon-button";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<IconButton aria-label="delete">
				<DeleteIcon />
			</IconButton>
			<IconButton aria-label="delete" disabled color="primary">
				<DeleteIcon />
			</IconButton>
			<IconButton color="secondary" aria-label="add an alarm">
				<AlarmIcon />
			</IconButton>
			<IconButton color="primary" aria-label="add to shopping cart">
				<AddShoppingCartIcon />
			</IconButton>
		</div>
	)
}

export default (
	<App />
);
```



##### Copy this snapshot in the overview panel

```js
import React from "react";
import IconButton from "@bit/totalsoft_oss.react-mui.icon-button";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(5),
	}
}));

const App = () => {
	const classes = useStyles();

	return (
		<div>
			<IconButton aria-label="delete" className={classes.margin} size="small">
				<ArrowDownwardIcon fontSize="inherit" />
			</IconButton>
			<IconButton aria-label="delete" className={classes.margin}>
				<DeleteIcon fontSize="small" />
			</IconButton>
			<IconButton aria-label="delete" className={classes.margin}>
				<DeleteIcon />
			</IconButton>
			<IconButton aria-label="delete" className={classes.margin}>
				<DeleteIcon fontSize="large" />
			</IconButton>
		</div>
	)
}

export default (
	<App />
);
```