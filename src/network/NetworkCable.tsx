import React from 'react';
import { networkCableCategoryOf } from './util/network-cable-category.util';
import NetworkCableShielding from './NetworkCableShielding';
import SimpleTable from '../util/SimpleTable';

const networkCableCategories = [
    networkCableCategoryOf('CAT 5', '100 MHz', ['100 Mbit/s (100BASE-TX)'], 'UTP', ''),
    networkCableCategoryOf('CAT 5e', '100 MHz', ['1 Gbit/s (1000BASE-T)', '2,5 Gbit/s (2.5GBASE-T)', '5 Gbit/s (5GBASE-T) bis 75m'], 'UTP', ''),
    networkCableCategoryOf('CAT 6', '250 MHz', ['5 Gbit/s (5GBASE-T)', '10 Gbit/s (10GBASE-T) bis 55m'], 'UTP', ''),
    networkCableCategoryOf('CAT 6a', '500 MHz', ['10 Gbit/s (10GBASE-T)'], 'STP', ''),
    networkCableCategoryOf('CAT 7', '600 MHz', ['10 Gbit/s (10GBASE-T)'], 'S/FTP', 'GG45 Stecker erforderlich'),
    networkCableCategoryOf('CAT 7a', '1000 MHz', ['10 Gbit/s (10GBASE-T)'], 'S/FTP', 'GG45 Stecker erforderlich'),
    networkCableCategoryOf('CAT 8', '2000 MHz', ['25 Gbit/s (25GBASE-T)', '40 Gbit/s (40GBASE-T)'], 'S/FTP', ''),
];

const NetworkCable: React.FunctionComponent = () => {
    return (
        <>
            <SimpleTable
                caption="Kategorien"
                columns={[
                    { id: 'name', header: 'Bezeichnung', render: (row) => row.name },
                    { id: 'bandwidth', header: 'Bandbreite', render: (row) => row.bandwidth },
                    { id: 'transferRates', header: 'Übertragungsrate', render: (row) => row.transferRates.map((transferRate, i) => <div key={i}>{transferRate}</div>) },
                    { id: 'shielding', header: 'Schirmung', render: (row) => row.shielding },
                    { id: 'notes', header: 'Anmerkungen', render: (row) => row.notes },
                ]}
                value={networkCableCategories}
            />

            <NetworkCableShielding />
        </>
    );
};

export default NetworkCable;
