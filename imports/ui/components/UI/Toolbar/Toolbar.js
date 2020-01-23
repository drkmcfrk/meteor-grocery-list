import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

import styles from './Toolbar.m.css';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	logoIcon: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const toolbar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<LocalGroceryStoreIcon className={classes.logoIcon} />
					<Typography variant="h6" className={classes.title}>
						Grocery List Maker
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default toolbar;
