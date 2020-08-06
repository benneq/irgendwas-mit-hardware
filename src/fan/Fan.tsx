import React from 'react';
import FanConnectors from './fan-connectors.mdx';
import FanSpecs from './fan-specs.mdx';


const Fan: React.FunctionComponent = () => {
    return (
        <>
            <FanConnectors />
            <FanSpecs />
        </>
    );
};

export default Fan;
