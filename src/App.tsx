import React from 'react';
import Layout from './layout/Layout';
import { Switch, Redirect, Route } from 'react-router-dom';
import MemoryLatencyCalculator from './memory/MemoryLatencyCalculator';
import Home from './home/Home';
import NetworkCable from './network/NetworkCable';

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/memory" component={MemoryLatencyCalculator} />
        <Route path="/network" component={NetworkCable} />
      </Switch>
    </Layout>
  );
};

export default App;
