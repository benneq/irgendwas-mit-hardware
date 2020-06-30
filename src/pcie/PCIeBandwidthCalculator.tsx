import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '../util/NumberField';

const PCIeBandwidthCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState({ transferRate: 8, lineCodeWords: 128, lineCodeSymbols: 130, lanes: 16 });
    const { transferRate, lineCodeWords, lineCodeSymbols, lanes } = value;

    const bandwidth = transferRate * (lineCodeWords / lineCodeSymbols) * lanes / 8 * 1000;

    const handleTransferRateChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, transferRate: e.target.value as number}));
    };

    const handleLineCodeWordsChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, lineCodeWords: e.target.value as number}));
    };

    const handleLineCodeSymbolsChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, lineCodeSymbols: e.target.value as number}));
    };

    const handleLanesChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, lanes: e.target.value as number}));
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <NumberField
                    label="Übertragungsrate"
                    helperText="In GT/s"
                    value={transferRate}
                    onChange={handleTransferRateChange}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Leitungscode Datenbits"
                    helperText="In bit"
                    value={lineCodeWords}
                    onChange={handleLineCodeWordsChange}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Leitungscode Codebits"
                    helperText="In bit"
                    value={lineCodeSymbols}
                    onChange={handleLineCodeSymbolsChange}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Lanes"
                    helperText="Anzahl"
                    value={lanes}
                    onChange={handleLanesChange}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Bandbreite"
                    helperText="In MB/s"
                    disabled
                    value={bandwidth}
                />
            </Grid>
        </Grid>
    );
};

export default PCIeBandwidthCalculator;
