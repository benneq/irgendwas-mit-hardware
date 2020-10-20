import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import NavigationList from './navigationList';



const menu = [
    { text: 'Home', to: '/home' },
    { text: 'Netzwerk', children: [
        { text: 'Geräte', to: '/network/device'},
        { text: 'Kabel', to: '/network/cable' },
        { text: 'Power over Ethernet', to: '/network/poe' },
        { text: 'WLAN / Wi-Fi', to: '/network/wi-fi' },
    ]},
    { text: 'Grafik', children: [
        { text: 'Display Standards', to: '/graphics/display-standards' },
        { text: 'Display Schnitstellen', to: '/graphics/display-interfaces' },
        { text: 'Display Synchronisierung', to: '/graphics/display-synchronization' },
        { text: 'Display Panel', to: '/graphics/display-panel' },
        { text: 'Framerate', to: '/graphics/framerate' },
    ]},
    { text: 'RAM', children: [
        { text: 'Specs', to: '/memory' },
        { text: 'Multi-Channel', to: '/memory/multi-channel' },
        { text: 'Topologie', to: '/memory/topology' },
    ]},
    { text: 'USB', to: '/usb' },
    { text: 'PCIe', to: '/pcie' },
    { text: 'Speichermedien', children: [
        { text: 'HDD', to: '/storage/hdd' },
        { text: 'SSD', to: '/storage/ssd' },
    ]},
    { text: 'Lüfter', children: [
        { text: 'Anschlüsse', to: '/fan/connectors' },
        { text: 'Specs', to: '/fan/specs' },
    ]},
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