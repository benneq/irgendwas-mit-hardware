import React from 'react';
import Layout from './layout/Layout';
import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './home/Home';
import NetworkCable from './network/NetworkCable';
import USB from './usb/USB';
import NetworkWiFi from './network/wifi/NetworkWiFi';
import PCIe from './pcie/PCIe';
import SearchResults from './search/SearchResults';
import HDD from './hdd/HDD';
import Memory from './memory/Memory';
import DisplayStandards from './graphics/DisplayStandards';
import DisplayInterfaces from './graphics/DisplayInterfaces';
import { NETWORK_ROUTES } from './network/network.routes';
import { GRAPHICS_ROUTES } from './graphics/graphics.routes';
import { PCIE_ROUTES } from './pcie/pcie.routes';
import { HDD_ROUTES } from './hdd/hdd.routes';
import { MEMORY_ROUTES } from './memory/memory.routes';
import { USB_ROUTES } from './usb/usb.routes';

const App: React.FunctionComponent = () => {
	return (
		<Layout>
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/search" component={SearchResults} />
				<Route path={USB_ROUTES.index} component={USB} />
				<Route path={MEMORY_ROUTES.index} component={Memory} />
				<Route path={NETWORK_ROUTES.cable} component={NetworkCable} />
				<Route path={NETWORK_ROUTES.wifi} component={NetworkWiFi} />
				<Route path={GRAPHICS_ROUTES.displayStandards} component={DisplayStandards} />
				<Route path={GRAPHICS_ROUTES.displayInterfaces} component={DisplayInterfaces} />
				<Route path={PCIE_ROUTES.index} component={PCIe} />
				<Route path={HDD_ROUTES.index} component={HDD} />
			</Switch>
		</Layout>
	);
};

export default App;
