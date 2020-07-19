import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import NavigationList from './NavigationList';
import { NETWORK_ROUTES } from '../network/network.routes';
import { GRAPHICS_ROUTES } from '../graphics/graphics.routes';
import { MEMORY_ROUTES } from '../memory/memory.routes';
import { USB_ROUTES } from '../usb/usb.routes';
import { PCIE_ROUTES } from '../pcie/pcie.routes';
import { HDD_ROUTES } from '../hdd/hdd.routes';



const menu = [
	{ text: 'Home', to: '/home' },
	{ text: 'Netzwerk', children: [
		{ text: 'Kabel', to: NETWORK_ROUTES.cable },
		{ text: 'WLAN / Wi-Fi', to: NETWORK_ROUTES.wifi },
	]},
	{ text: 'Grafik', children: [
		{ text: 'Display Standards', to: GRAPHICS_ROUTES.displayStandards },
		{ text: 'Display Schnitstellen', to: GRAPHICS_ROUTES.displayInterfaces }
	]},
	{ text: 'RAM', to: MEMORY_ROUTES.index },
	{ text: 'USB', to: USB_ROUTES.index },
	{ text: 'PCIe', to: PCIE_ROUTES.index },
	{ text: 'HDD', to: HDD_ROUTES.index },
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