##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Button from '@bit/totalsoft_oss.react-mui.button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(5),
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div>
			<Button
				color="warning"
				className={classes.button}
				startIcon={<DeleteIcon />}
				size="sm"
			>
				Delete
      </Button>
			<Button
				color="primary"
				className={classes.button}
				endIcon={<SendIcon />}
				size="sm"
			>
				Send
      </Button>
			<Button
				color="info"
				className={classes.button}
				startIcon={<CloudUploadIcon />}
				size="sm"
			>
				Upload
      </Button>
			<Button
				color="danger"
				className={classes.button}
				startIcon={<KeyboardVoiceIcon />}
				size="sm"
			>
				Talk
      </Button>
			<Button
				color="info"
				size="small"
				className={classes.button}
				startIcon={<SaveIcon />}
				size="sm"
			>
				Save
      </Button>
			<Button
				color="success"
				size="large"
				className={classes.button}
				startIcon={<SaveIcon />}
				size="sm"
			>
				Save
      </Button>
		</div>
	)
}

export default (
	<App />
)
 ```



 ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Button from '@bit/totalsoft_oss.react-mui.button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(1),
	},
	extendedIcon: {
		marginRight: theme.spacing(1),
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div>
			<Button size="xs" color="info" className={classes.margin}>
				Small
        </Button>
			<Button size="sm" color="info" className={classes.margin}>
				Medium
        </Button>
			<Button size="lg" color="info" className={classes.margin}>
				Large
        </Button>
		</div>
	)
}

export default (
	<App />
)
 ```