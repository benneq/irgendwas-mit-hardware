import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NumberFormatter from '@components/common/NumberFormatter';
import PositiveIntegerField from '@components/common/PositiveIntegerField';
import SelectField from '@components/common/SelectField';
import { isEqual } from 'lodash-es';
import NumberField from '@components/common/NumberField';


const timingFormats = [
    {
        name: 'None',
        hEffective: (h: number, v: number, r: number) => h,
        vEffective: (h: number, v: number, r: number) => v,
    },
    {
        name: 'CVT',
        hEffective: (h: number, v: number, r: number) => h + (16 * Math.floor(((h * Math.max(0.2, 0.3 - ((3000 * ((1/r)-0.00055))/(v + 3)))) / (1 - Math.max(0.2, 0.3 - ((3000 * ((1/r)-0.00055))/(v + 3))))) / 16)),
        vEffective: (h: number, v: number, r: number) => v + Math.floor((((v + 3) * 0.00055) / ((1/r) - 0.00055)) + 4),
    },
    {
        name: 'CVT-RB',
        hEffective: (h: number, v: number, r: number) => h + 160,
        vEffective: (h: number, v: number, r: number) => v + Math.ceil((v * 0.00046) / ((1/r) - 0.00046)),
    },
    {
        name: 'CVT-R2',
        hEffective: (h: number, v: number, r: number) => h + 80,
        vEffective: (h: number, v: number, r: number) => v + Math.ceil((v * 0.00046) / ((1/r) - 0.00046)),
    },
];


const presets = [
    { h: 1920, v: 1080, r: 60, c: 8, t: timingFormats[3] },
    { h: 1920, v: 1080, r: 144, c: 8, t: timingFormats[3] },
    { h: 1920, v: 1080, r: 240, c: 8, t: timingFormats[3] },
    { h: 2560, v: 1440, r: 60, c: 8, t: timingFormats[3] },
    { h: 2560, v: 1440, r: 144, c: 8, t: timingFormats[3] },
    { h: 3840, v: 2160, r: 60, c: 8, t: timingFormats[3] },
    { h: 3840, v: 2160, r: 144, c: 8, t: timingFormats[3] },
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

    const handleCVTChange = (val: typeof timingFormats[number]) => {
        setValue(value => ({ ...value, t: val }));
    };

    useEffect(() => {
        const hEffective = value.t.hEffective(value.h, value.v, value.r);
        const vEffective = value.t.vEffective(value.h, value.v, value.r);
        const bandwidth = hEffective * vEffective * value.r * 3 * value.c;
        setBandwidth(bandwidth);
    }, [value]);

    const refreshWindow = 1000 / value.r;

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
                    <NumberField
                        label="Max. Reaktionszeit"
                        helperText="In ms"
                        disabled
                        value={refreshWindow}
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
                <Grid item>
                    <SelectField
                        label="Timing Format"
                        value={value.t}
                        options={timingFormats}
                        renderOption={preset => `${preset.name}`}
                        onValueChange={handleCVTChange}
                        valueComparator={isEqual}
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
