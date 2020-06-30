import React from 'react';
import SimpleTable from '../util/SimpleTable';
import PCIeBandwidthCalculator from './PCIeBandwidthCalculator';

const pcieStandards = [
    { name: 'PCIe 1.0', transferRate: '2,5 GT/s', lineCode: '8b/10b', bandwidth: '250 MB/s' },
    { name: 'PCIe 2.0', transferRate: '5,0 GT/s', lineCode: '8b/10b', bandwidth: '500 MB/s' },
    { name: 'PCIe 3.0', transferRate: '8,0 GT/s', lineCode: '128b/130b', bandwidth: '984,6 MB/s' },
    { name: 'PCIe 4.0', transferRate: '16,0 GT/s', lineCode: '128b/130b', bandwidth: '1969,2 MB/s' },
    { name: 'PCIe 5.0', transferRate: '32,0 GT/s', lineCode: '128b/130b', bandwidth: '3938,5 MB/s' },
];

const PCIeStandards: React.FunctionComponent = () => {
    return (
        <>
            <SimpleTable
                caption="Standards"
                columns={[
                    { id: 'name', header: 'Bezeichnung', render: (row) => row.name },
                    { id: 'transferRate', header: 'Übertragungsrate', render: (row) => row.transferRate },
                    { id: 'lineCode', header: 'Leitungscode', render: (row) => row.lineCode },
                    { id: 'bandwidth', header: 'Bandbreite pro Lane', render: (row) => row.bandwidth }
                ]}
                value={pcieStandards}
            />

            <PCIeBandwidthCalculator />
        </>
    );
};

export default PCIeStandards;
