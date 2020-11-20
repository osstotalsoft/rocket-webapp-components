##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import DialogDisplay from '@bit/totalsoft_oss.react-mui.dialog-display';
import Button from '@material-ui/core/Button';

export default (
	<DialogDisplay
		open={true}
		onClose={() => { }}
		content={<div>  Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.</div>}
		actions={
			<>
				<Button color="primary">
					Disagree
      </Button>
				<Button color="primary">
					Agree
     </Button>
			</>
		}
	></DialogDisplay >
)
 ```


 ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import DialogDisplay from '@bit/totalsoft_oss.react-mui.dialog-display';
import Button from '@material-ui/core/Button';

const App = () => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open alert dialog
      </Button>
			<DialogDisplay
				open={open}
				onClose={handleClose}
				content={<div>  Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.</div>}
				actions={
					<>
						<Button onClick={handleClose} color="primary">
							Disagree
          </Button>
						<Button onClick={handleClose} color="primary" autoFocus>
							Agree
          </Button>
					</>
				}
			></DialogDisplay >
		</>
	)
}

export default (
	<App />
)
 ```


 ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import DialogDisplay from '@bit/totalsoft_oss.react-mui.dialog-display';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Slide in alert dialog
      </Button>
			<DialogDisplay
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				content={<div>  Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.</div>}
				actions={
					<>
						<Button onClick={handleClose} color="primary">
							Disagree
          </Button>
						<Button onClick={handleClose} color="primary" autoFocus>
							Agree
          </Button>
					</>
				}
			></DialogDisplay >
		</>
	)
}

export default (
	<App />
)
 ```


 ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import DialogDisplay from '@bit/totalsoft_oss.react-mui.dialog-display';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const App = () => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open form dialog
      </Button>
			<DialogDisplay
				open={open}
				onClose={handleClose}
				content={<><div> To subscribe to this website, please enter your email address here. We will send updates
            occasionally.</div>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/></>}
				actions={
					<>
						<Button onClick={handleClose} color="primary">
							Disagree
          </Button>
						<Button onClick={handleClose} color="primary" autoFocus>
							Agree
          </Button>
					</>
				}
			></DialogDisplay >
		</>
	)
}

export default (
	<App />
)
 ```


  ##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import DialogDisplay from '@bit/totalsoft_oss.react-mui.dialog-display';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {

	const [open, setOpen] = React.useState(false);
  const classes = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="outlined" color="primary" onClick={handleClickOpen}>
				Open full-screen dialog
      </Button>
			<DialogDisplay
				open={open}
				fullScreen
				TransitionComponent={Transition}
				onClose={handleClose}
				content={
					<>
						<AppBar className={classes.appBar}>
							<Toolbar>
								<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
									<CloseIcon />
								</IconButton>
								<Typography variant="h6" className={classes.title}>
									Sound
                               </Typography>
								<Button autoFocus color="inherit" onClick={handleClose}>
									save
                               </Button>
							</Toolbar>
						</AppBar>
						<List>
							<ListItem button>
								<ListItemText primary="Phone ringtone" secondary="Titania" />
							</ListItem>
							<Divider />
							<ListItem button>
								<ListItemText primary="Default notification ringtone" secondary="Tethys" />
							</ListItem>
						</List>
					</>
				}
			></DialogDisplay >
		</>
	)
}

export default (
	<App />
)
 ```