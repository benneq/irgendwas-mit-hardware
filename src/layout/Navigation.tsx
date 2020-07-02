import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import NavigationList from './NavigationList';



const menu = [
	{ text: 'Home', to: '/home' },
	{ text: 'Netzwerk', children: [
		{ text: 'Kabel', to: '/network/cable' },
		{ text: 'WLAN / Wi-Fi', to: '/network/wifi' },
	]},
	{ text: 'RAM', to: '/memory' },
	{ text: 'USB', to: '/usb' },
	{ text: 'PCIe', to: '/pcie' },
];

const useStyles = makeStyles(theme => ({
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
}));

const Navigation: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.toolbar} />
			<Divider />
			<NavigationList
				component="nav"
				value={menu}
			/>
		</>
	);
};

export default Navigation;