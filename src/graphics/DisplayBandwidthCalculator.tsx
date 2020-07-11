import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NumberFormatter from '../util/NumberFormatter';
import PositiveIntegerField from '../util/PositiveIntegerField';
import SelectField from '../util/SelectField';
import { isEqual } from 'lodash-es';


const presets = [
    { h: 1920, v: 1080, r: 60, c: 8 },
    { h: 1920, v: 1080, r: 144, c: 8 },
    { h: 1920, v: 1080, r: 240, c: 8 },
    { h: 2560, v: 1440, r: 60, c: 8 },
    { h: 2560, v: 1440, r: 144, c: 8 },
    { h: 3840, v: 2160, r: 60, c: 8 },
    { h: 3840, v: 2160, r: 144, c: 8 },
];


const DisplayBandwidthCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState(presets[0]);
    const [bandwidth, setBandwidth] = useState(0);

    const handleHorizontalResolutionChange = (val?: number) => {
        setValue(value => ({ ...value, h: val || NaN }));
    };

    const handleVerticalResolutionChange = (val?: number) => {
        setValue(value => ({ ...value, v: val || NaN }));
    };

    const handleRefreshRateChange = (val?: number) => {
        setValue(value => ({ ...value, r: val || NaN }));
    };

    const handleColorDepthChange = (val?: number) => {
        setValue(value => ({ ...value, c: val || NaN }));
    };

    useEffect(() => {
        const bandwidth = value.h * value.v * value.r * 3 * value.c;
        setBandwidth(bandwidth);
    }, [value]);

    return (
        <>
            <Grid container>
                <Grid item>
                    <SelectField
                        label="Presets"
                        value={value}
                        options={presets}
                        renderOption={preset => `${preset.h}x${preset.v} ${preset.r}Hz ${preset.c}bit`}
                        onValueChange={setValue}
                        valueComparator={isEqual}
                    >
                        Custom
                    </SelectField>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <PositiveIntegerField
                        value={value.h}
                        onValueChange={handleHorizontalResolutionChange}
                        label="Horizontale Auflösung"
                        helperText="in Pixel"
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        value={value.v}
                        onValueChange={handleVerticalResolutionChange}
                        label="Vertikale Auflösung"
                        helperText="in Pixel"
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        value={value.r}
                        onValueChange={handleRefreshRateChange}
                        label="Bildwiederholrate"
                        helperText="in Hz"
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        value={value.c}
                        onValueChange={handleColorDepthChange}
                        label="Farbtiefe"
                        helperText="in bit"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                Benötigte Bandbreite: <NumberFormatter value={bandwidth} /> bit/s = <NumberFormatter value={bandwidth / 1000000000} /> Gbit/s
            </Grid>
        </>
    );
};

export default DisplayBandwidthCalculator;
