import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import PositiveIntegerField from '../common/PositiveIntegerField';
import NumberField from '../common/NumberField';
import SelectField from '../common/SelectField';
import { isEqual } from 'lodash-es';


const presets = [
    { name: 'SDR-66', c: 66, b: 64, p: 1 },
    { name: 'DDR-400', c: 200, b: 64, p: 2 },
    { name: 'DDR2-800', c: 200, b: 64, p: 4 },
    { name: 'DDR3-1600', c: 200, b: 64, p: 8 },
    { name: 'DDR4-2133', c: 266, b: 64, p: 8 },
    { name: 'DDR5-5200', c: 325, b: 64, p: 16 },
];

const MemoryBandwidthCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState(presets[4]);

    const handleClockrateChange = (val?: number) => {
        setValue(value => ({ ...value, c: val || NaN }));
    };

    const handleBuswidthChange = (val?: number) => {
        setValue(value => ({ ...value, b: val || NaN }));
    };

    const handlePrefetchingFactorChange = (val?: number) => {
        setValue(value => ({ ...value, p: val || NaN }));
    };

    const bandwidth = value.c * value.b * value.p;

    return (
        <>
            <Grid container>
                <Grid item>
                    <SelectField
                        label="Presets"
                        value={value}
                        options={presets}
                        renderOption={preset => `${preset.name}`}
                        onValueChange={setValue}
                        valueComparator={isEqual}
                    >
                        Custom
                    </SelectField>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <NumberField
                        label="Takt"
                        helperText="In MHz"
                        value={value.c}
                        onValueChange={handleClockrateChange}
                        allowNegative={false}
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        label="Busbreite"
                        helperText="In bit"
                        value={value.b}
                        onValueChange={handleBuswidthChange}
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        label="Prefetching-Faktor"
                        value={value.p}
                        onValueChange={handlePrefetchingFactorChange}
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        label="Bandbreite"
                        helperText="In Mbit/s"
                        value={bandwidth}
                        disabled
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default MemoryBandwidthCalculator;
