import React from 'react';
import PCIeTable from './pcie-table.mdx';
import PCIeBandwidthCalculator from './PCIeBandwidthCalculator';

const PCIe: React.FunctionComponent = () => {
    return (
        <>
            <PCIeTable />

            <PCIeBandwidthCalculator />
        </>
    );
};

export default PCIe;
