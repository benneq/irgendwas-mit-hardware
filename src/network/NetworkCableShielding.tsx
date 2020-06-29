import React from 'react';
import SimpleTable from '../util/SimpleTable';

const networkCableShieldings = [
    { designation: 'U/UTP', cable: '', pair: '' },
    { designation: 'U/FTP', cable: '', pair: 'Folie' },
    { designation: 'F/UTP', cable: 'Folie', pair: '' },
    { designation: 'S/UTP', cable: 'Drahtgeflecht', pair: '' },
    { designation: 'SF/UTP', cable: 'Drahtgeflecht und Folie', pair: '' },
    { designation: 'F/FTP', cable: 'Folie', pair: 'Folie' },
    { designation: 'S/FTP', cable: 'Drahtgeflecht', pair: 'Folie' },
    { designation: 'SF/FTP', cable: 'Drahtgeflecht und Folie', pair: 'Folie' },
];

const NetworkCableShielding: React.FunctionComponent = () => {
    return (
        <SimpleTable
            caption="Schirmung"
            columns={[
                { id: 'designation', header: 'Bezeichnung (ISO/IEC 11801)', render: (row) => row.designation },
                { id: 'cable', header: 'Gesamtschirm', render: (row) => row.cable },
                { id: 'pair', header: 'Adernpaarschirm', render: (row) => row.pair },
            ]}
            value={networkCableShieldings}
            legend="U = ungeschirmt, F = Folie, S = Drahtgeflecht, SF = Drahtgeflecht und Folie, TP = Twisted Pair"
        />
    );
};

export default NetworkCableShielding;
