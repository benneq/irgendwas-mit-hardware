import React from 'react';
import SimpleTable from '../util/SimpleTable';

const usbTypes = [
    { name: 'Low Speed', transferMode: 'USB 1.0', oldNames: [], transferRate: '1,5 Mbit/s', notes: '' },
    { name: 'Full Speed', transferMode: 'USB 1.0', oldNames: [], transferRate: '12 Mbit/s', notes: '' },
    { name: 'Hi-Speed', transferMode: 'USB 2.0', oldNames: [], transferRate: '480 Mbit/s', notes: '' },
    { name: 'SuperSpeed USB', transferMode: 'USB 3.2 Gen 1', oldNames: ['USB 3.0', 'USB 3.1 Gen 1'], transferRate: '5 Gbit/s', notes: '' },
    { name: 'SuperSpeed USB 10 Gbit/s', transferMode: 'USB 3.2 Gen 2', oldNames: ['USB 3.1', 'USB 3.1 Gen 2'], transferRate: '10 Gbit/s', notes: '' },
    { name: 'SuperSpeed USB 20 Gbit/s', transferMode: 'USB 3.2 Gen 2x2', oldNames: [], transferRate: '20 Gbit/s', notes: 'USB-C Stecker erforderlich' },
];

const USB: React.FunctionComponent = () => {
    return (
        <SimpleTable
            caption="USB"
            columns={[
                { id: 'name', header: 'Bezeichnung', render: (val) => val.name },
                { id: 'transferMode', header: 'Spezifikation', render: (val) => val.transferMode },
                { id: 'oldNames', header: 'Alte Bezeichnungen', render: (val) => val.oldNames.map((oldName, i) => <div key={i}>{oldName}</div>) },
                { id: 'transferRate', header: 'Übertragungsrate', render: (val) => val.transferRate },
                { id: 'notes', header: 'Anmerkungen', render: (val) => val.notes },
            ]}
            value={usbTypes}
        />
    );
};

export default USB;
