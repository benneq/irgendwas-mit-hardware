import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Bezeichnung</TableCell>
                        <TableCell>Spezifikation</TableCell>
                        <TableCell>Alte Bezeichnungen</TableCell>
                        <TableCell>Übertragungsrate</TableCell>
                        <TableCell>Anmerkungen</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {usbTypes.map((type, i) =>
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">{type.name}</TableCell>
                            <TableCell>{type.transferMode}</TableCell>
                            <TableCell>{type.oldNames.map((oldName, i) => <div key={i}>{oldName}</div>)}</TableCell>
                            <TableCell>{type.transferRate}</TableCell>
                            <TableCell>{type.notes}</TableCell>
                        </TableRow>  
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default USB;
