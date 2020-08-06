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
import DisplaySynchronization from './graphics/DisplaySynchronization';
import Framerate from './graphics/Framerate';
import Fan from './fan/Fan';
import { NETWORK_ROUTES } from './network/network.routes';
import { GRAPHICS_ROUTES } from './graphics/graphics.routes';
import { PCIE_ROUTES } from './pcie/pcie.routes';
import { HDD_ROUTES } from './hdd/hdd.routes';
import { MEMORY_ROUTES } from './memory/memory.routes';
import { USB_ROUTES } from './usb/usb.routes';
import { HOME_ROUTES } from './home/home.routes';
import { SEARCH_ROUTES } from './search/search.routes';
import { FAN_ROUTES } from './fan/fan.routes';



const App: React.FunctionComponent = () => {
	return (
		<Layout>
			<Switch>
				<Redirect exact from="/" to={HOME_ROUTES.index.path} />
				<Route path={HOME_ROUTES.index.path} component={Home} />
				<Route path={SEARCH_ROUTES.results.path} component={SearchResults} />
				<Route path={USB_ROUTES.index.path} component={USB} />
				<Route path={MEMORY_ROUTES.index.path} component={Memory} />
				<Route path={NETWORK_ROUTES.cable.path} component={NetworkCable} />
				<Route path={NETWORK_ROUTES.wifi.path} component={NetworkWiFi} />
				<Route path={GRAPHICS_ROUTES.displayStandards.path} component={DisplayStandards} />
				<Route path={GRAPHICS_ROUTES.displayInterfaces.path} component={DisplayInterfaces} />
				<Route path={GRAPHICS_ROUTES.displaySynchronization.path} component={DisplaySynchronization} />
				<Route path={GRAPHICS_ROUTES.framerate.path} component={Framerate} />
				<Route path={PCIE_ROUTES.index.path} component={PCIe} />
				<Route path={HDD_ROUTES.index.path} component={HDD} />
				<Route path={FAN_ROUTES.index.path} component={Fan} />
			</Switch>
		</Layout>
	);
};

export default App;
