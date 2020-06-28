import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { networkCableCategoryOf } from './util/network-cable-category.util';
import NetworkCableShielding from './NetworkCableShielding';

const networkCableCategories = [
    networkCableCategoryOf('CAT 5', '100 MHz', ['100 Mbit/s (100BASE-TX)'], 'UTP', ''),
    networkCableCategoryOf('CAT 5e', '100 MHz', ['1 Gbit/s (1000BASE-T)', '2,5 Gbit/s (2.5GBASE-T)', '5 Gbit/s (5GBASE-T) bis 75m'], 'UTP', ''),
    networkCableCategoryOf('CAT 6', '250 MHz', ['5 Gbit/s (5GBASE-T)', '10 Gbit/s (10GBASE-T) bis 55m'], 'UTP', ''),
    networkCableCategoryOf('CAT 6a', '500 MHz', ['10 Gbit/s (10GBASE-T)'], 'STP', ''),
    networkCableCategoryOf('CAT 7', '600 MHz', ['10 Gbit/s'], 'S/FTP', 'GG45 Stecker erforderlich'),
    networkCableCategoryOf('CAT 7a', '1000 MHz', ['10 Gbit/s'], 'S/FTP', 'GG45 Stecker erforderlich'),
    networkCableCategoryOf('CAT 8', '2000 MHz', ['25 Gbit/s (25GBASE-T)', '40 Gbit/s (40GBASE-T)'], 'S/FTP', ''),
];

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingLeft: theme.spacing(2),
    },
}));

const NetworkCable: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <>
            <Toolbar className={classes.toolbar}><Typography variant="h6">Kategorien</Typography></Toolbar>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Kategorie</TableCell>
                            <TableCell>Bandbreite</TableCell>
                            <TableCell>Übertragungsrate</TableCell>
                            <TableCell>Schirmung</TableCell>
                            <TableCell>Anmerkungen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {networkCableCategories.map((cat, i) =>
                            <TableRow key={i}>
                                <TableCell component="th" scope="row">{cat.name}</TableCell>
                                <TableCell>{cat.bandwidth}</TableCell>
                                <TableCell>{cat.transferRates.map((transferRate, j) => <div key={j}>{transferRate}</div>)}</TableCell>
                                <TableCell>{cat.shielding}</TableCell>
                                <TableCell>{cat.notes}</TableCell>
                            </TableRow>  
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Toolbar className={classes.toolbar}><Typography variant="h6">Schirmung</Typography></Toolbar>
            <NetworkCableShielding />
        </>
    );
};

export default NetworkCable;
