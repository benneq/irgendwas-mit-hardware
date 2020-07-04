import React from 'react';
import PCIeTable from './pcie-table.mdx';
import PCIeBandwidthCalculator from './PCIeBandwidthCalculator';

const PCIeStandards: React.FunctionComponent = () => {
    return (
        <>
            <PCIeTable />

            <PCIeBandwidthCalculator />
        </>
    );
};

export default PCIeStandards;
