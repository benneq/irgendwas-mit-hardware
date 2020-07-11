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

const App: React.FunctionComponent = () => {
	return (
		<Layout>
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/search" component={SearchResults} />
				<Route path="/usb" component={USB} />
				<Route path="/memory" component={Memory} />
				<Route exact path="/network/cable" component={NetworkCable} />
				<Route exact path="/network/wifi" component={NetworkWiFi} />
				<Route path="/graphics/display-standards" component={DisplayStandards} />
				<Route path="/graphics/display-interfaces" component={DisplayInterfaces} />
				<Route path="/pcie" component={PCIe} />
				<Route path="/hdd" component={HDD} />
			</Switch>
		</Layout>
	);
};

export default App;
