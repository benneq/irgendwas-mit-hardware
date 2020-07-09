import React from 'react';
import NetworkCableCategoriesTable from './cable/network-cable-categories-table.mdx';
import NetworkCableShieldingTable from './cable/network-cable-shielding-table.mdx';

const NetworkCable: React.FunctionComponent = () => {
    return (
        <>
            <NetworkCableCategoriesTable />

            <NetworkCableShieldingTable />
        </>
    );
};

export default NetworkCable;
