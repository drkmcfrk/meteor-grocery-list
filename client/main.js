import React from 'react';
import { Meteor } from 'meteor/meteor';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ReactDOM, render } from 'react-dom';
import App from '/imports/ui/App';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

Meteor.startup(() => {
	render(
		<ThemeProvider theme={theme}>
			<CssBaseLine />
			<App />
		</ThemeProvider>,
		document.getElementById('react-target')
	);
});
