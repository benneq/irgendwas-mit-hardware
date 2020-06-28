import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const networkCableShieldings = [
    { designation: 'U/UTP', cable: '', pair: '' },
    { designation: 'S/UTP', cable: 'Drahtgeflecht', pair: '' },
    { designation: 'U/FTP', cable: '', pair: 'Folie' },
    { designation: 'S/FTP', cable: 'Drahtgeflecht', pair: 'Folie' },
    { designation: 'F/FTP', cable: 'Folie', pair: 'Folie' },
    { designation: 'SF/FTP', cable: 'Drahtgeflecht und Folie', pair: 'Folie' },
];

const NetworkCableShielding: React.FunctionComponent = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Bezeichnung</TableCell>
                        <TableCell>Gesamtschirm</TableCell>
                        <TableCell>Adernpaarschirm</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {networkCableShieldings.map((shielding, i) =>
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">{shielding.designation}</TableCell>
                            <TableCell>{shielding.cable}</TableCell>
                            <TableCell>{shielding.pair}</TableCell>
                        </TableRow>  
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default NetworkCableShielding;
