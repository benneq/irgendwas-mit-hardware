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
import { HOME_ROUTES } from '../home/home.routes';
import { FAN_ROUTES } from '../fan/fan.routes';



const menu = [
	{ text: 'Home', to: HOME_ROUTES.index.path },
	{ text: 'Netzwerk', children: [
		{ text: 'Kabel', to: NETWORK_ROUTES.cable.path },
		{ text: 'WLAN / Wi-Fi', to: NETWORK_ROUTES.wifi.path },
	]},
	{ text: 'Grafik', children: [
		{ text: 'Display Standards', to: GRAPHICS_ROUTES.displayStandards.path },
		{ text: 'Display Schnitstellen', to: GRAPHICS_ROUTES.displayInterfaces.path },
		{ text: 'Display Synchronisierung', to: GRAPHICS_ROUTES.displaySynchronization.path },
		{ text: 'Framerate', to: GRAPHICS_ROUTES.framerate.path }
	]},
	{ text: 'RAM', to: MEMORY_ROUTES.index.path },
	{ text: 'USB', to: USB_ROUTES.index.path },
	{ text: 'PCIe', to: PCIE_ROUTES.index.path },
	{ text: 'HDD', to: HDD_ROUTES.index.path },
	{ text: 'Lüfter', to: FAN_ROUTES.index.path },
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