import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '../util/NumberField';
import PositiveIntegerField from '../util/PositiveIntegerField';

const PCIeBandwidthCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState({ transferRate: 8, lineCodeWords: 128, lineCodeSymbols: 130, lanes: 16 });
    const { transferRate, lineCodeWords, lineCodeSymbols, lanes } = value;

    const bandwidth = transferRate * (lineCodeWords / lineCodeSymbols) * lanes / 8 * 1000;

    const handleTransferRateChange = (val?: number) => {
        setValue(value => ({ ...value, transferRate: val || NaN }));
    };

    const handleLineCodeWordsChange = (val?: number) => {
        setValue(value => ({ ...value, lineCodeWords: val || NaN }));
    };

    const handleLineCodeSymbolsChange = (val?: number) => {
        setValue(value => ({ ...value, lineCodeSymbols: val || NaN }));
    };

    const handleLanesChange = (val?: number) => {
        setValue(value => ({ ...value, lanes: val || NaN }));
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <NumberField
                    label="Übertragungsrate"
                    helperText="In GT/s"
                    value={transferRate}
                    onValueChange={handleTransferRateChange}
                    allowNegative={false}
                />
            </Grid>
            <Grid item>
                <PositiveIntegerField
                    label="Leitungscode Datenbits"
                    helperText="In bit"
                    value={lineCodeWords}
                    onValueChange={handleLineCodeWordsChange}
                />
            </Grid>
            <Grid item>
                <PositiveIntegerField
                    label="Leitungscode Codebits"
                    helperText="In bit"
                    value={lineCodeSymbols}
                    onValueChange={handleLineCodeSymbolsChange}
                />
            </Grid>
            <Grid item>
                <PositiveIntegerField
                    label="Lanes"
                    helperText="Anzahl"
                    value={lanes}
                    onValueChange={handleLanesChange}
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
