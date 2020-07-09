import React from 'react';
import Layout from './layout/Layout';
import { Switch, Redirect, Route } from 'react-router-dom';
import MemoryLatencyCalculator from './memory/MemoryLatencyCalculator';
import Home from './home/Home';
import NetworkCable from './network/NetworkCable';
import USB from './usb/USB';
import NetworkWiFi from './network/wifi/NetworkWiFi';
import PCIe from './pcie/PCIe';
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
				<Route exact path="/network/wifi" component={NetworkWiFi} />
				<Route path="/pcie" component={PCIe} />
				<Route path="/hdd" component={HDD} />
			</Switch>
		</Layout>
	);
};

export default App;
