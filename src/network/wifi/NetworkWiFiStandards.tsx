import React from 'react';
import SimpleTable from '../../util/SimpleTable';

const wifiStandards = [
    { name: 'Wi-Fi 1', ieeeStandard: '802.11b', transferRate: '1-11 Mbit/s', frequencies: ['2,4 GHz'], notes: 'inoffizieller Name' },
    { name: 'Wi-Fi 2', ieeeStandard: '802.11a', transferRate: '1,5-54 Mbit/s', frequencies: ['5 GHz'], notes: 'inoffizieller Name' },
    { name: 'Wi-Fi 3', ieeeStandard: '802.11g', transferRate: '3-54 Mbit/s', frequencies: ['2,4 GHz'], notes: 'inoffizieller Name' },
    { name: 'Wi-Fi 4', ieeeStandard: '802.11n', transferRate: '72-600 Mbit/s', frequencies: ['2,4 GHz', '5 GHz'], notes: '' },
    { name: 'Wi-Fi 5', ieeeStandard: '802.11ac', transferRate: '433-6933 Mbit/s', frequencies: ['2,4 GHz'], notes: '' },
    { name: 'Wi-Fi 6', ieeeStandard: '802.11ax', transferRate: '600-9608 Mbit/s', frequencies: ['2,4 GHz', '5 GHz'], notes: '' },
];

const NetworkWiFiStandards: React.FunctionComponent = () => {
    return (
        <SimpleTable
            caption="Standards"
            columns={[
                { id: 'name', header: 'Bezeichnung', render: (row) => row.name },
                { id: 'ieeeStandard', header: 'IEEE Standard', render: (row) => row.ieeeStandard },
                { id: 'transferRate', header: 'Übertragungsrate', render: (row) => row.transferRate },
                { id: 'frequencies', header: 'Frequenzbereich', render: (row) => row.frequencies.map((frequency, i) => <div key={i}>{frequency}</div>) },
                { id: 'notes', header: 'Anmerkungen', render: (row) => row.notes },
            ]}
            value={wifiStandards}
        />
    );
};

export default NetworkWiFiStandards;
