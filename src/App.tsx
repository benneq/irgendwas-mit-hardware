import React from 'react';
import Layout from './layout/Layout';
import { Switch, Redirect, Route } from 'react-router-dom';
import MemoryLatencyCalculator from './memory/MemoryLatencyCalculator';
import Home from './home/Home';
import NetworkCable from './network/NetworkCable';
import USB from './usb/USB';
import NetworkWiFiStandards from './network/wifi/NetworkWiFiStandards';
import PCIeStandards from './pcie/PCIeStandards';
import SearchResults from './search/SearchResults';
import HDD from './hdd/HDD';

const App: React.FunctionComponent = () => {
	return (
		<Layout>
			<Switch>
				<Redirect exact from="/" to="/home" />
				<Route path="/home" component={Home} />
				<Route path="/search" component={SearchResults} />
				<Route path="/usb" component={USB} />
				<Route path="/memory" component={MemoryLatencyCalculator} />
				<Route exact path="/network/cable" component={NetworkCable} />
				<Route exact path="/network/wifi" component={NetworkWiFiStandards} />
				<Route path="/pcie" component={PCIeStandards} />
				<Route path="/hdd" component={HDD} />
			</Switch>
		</Layout>
	);
};

export default App;