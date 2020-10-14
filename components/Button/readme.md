##### Copy this snapshot in the overview panel
 ```js
import React from 'react';
import Button from '@bit/totalsoft_oss.react-mui.button';
import { Grid } from '@material-ui/core';

export default (
	<Grid container spacing={1}>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="warning">
				Warning
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="primary">
				Primary
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="info">
				Info
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="success">
				Success
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="danger">
				Danger
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="rose">
				Rose
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="defaultNoBackground">
				DefaultNoBackground
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="primaryNoBackground">
				PrimaryNoBackground
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="infoNoBackground">
				InfoNoBackground
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="successNoBackground">
				SuccessNoBackground
                </Button>
		</Grid>

		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="warningNoBackground">
				WarningNoBackground
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="dangerNoBackground">
				DangerNoBackground
                </Button>
		</Grid>

		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="white">
				White
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="simple">
				Simple
                </Button>
		</Grid>
		<Grid item xs={12} sm={6} md={6} lg={3}>
			<Button color="transparent">
				Transparent
                </Button>
		</Grid>
	</Grid>
)
 ```