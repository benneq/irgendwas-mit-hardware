import React from 'react';
import DisplayInterfacesTable from './display-interfaces-table.mdx';
import DisplayBandwidthCalculator from './DisplayBandwidthCalculator';



const DisplayInterfaces: React.FunctionComponent = () => {
    return (
        <>
            <DisplayInterfacesTable />

            <DisplayBandwidthCalculator />
        </>
    );
};

export default DisplayInterfaces;
