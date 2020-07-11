import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '../util/NumberField';

const DisplayBandwidthCalculator: React.FunctionComponent = () => {
    const [horizontalResolution, setHorizontalResolution] = useState(1920);
    const [verticalResolution, setVerticalResolution] = useState(1080);
    const [refreshRate, setRefreshRate] = useState(60);
    const [colorDepth, setColorDepth] = useState(8);
    const [bandwidth, setBandwidth] = useState(0);

    const handleHorizontalResolutionChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setHorizontalResolution(e.target.value as number);
    };

    const handleVerticalResolutionChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setVerticalResolution(e.target.value as number);
    };

    const handleRefreshRateChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setRefreshRate(e.target.value as number);
    };

    const handleColorDepthChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setColorDepth(e.target.value as number);
    };

    useEffect(() => {
        const bandwidth = horizontalResolution * verticalResolution * refreshRate * 3 * colorDepth;
        setBandwidth(bandwidth);
    }, [horizontalResolution, verticalResolution, refreshRate, colorDepth]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <NumberField
                        value={horizontalResolution}
                        onChange={handleHorizontalResolutionChange}
                        label="Horizontale Auflösung"
                        helperText="in Pixel"
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        value={verticalResolution}
                        onChange={handleVerticalResolutionChange}
                        label="Vertikale Auflösung"
                        helperText="in Pixel"
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        value={refreshRate}
                        onChange={handleRefreshRateChange}
                        label="Bildwiederholrate"
                        helperText="in Hz"
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        value={colorDepth}
                        onChange={handleColorDepthChange}
                        label="Farbtiefe"
                        helperText="in bit"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                Benötigte Bandbreite: {bandwidth} bit/s = {bandwidth / 1000000000} Gbit/s
            </Grid>
        </>
    );
};

export default DisplayBandwidthCalculator;
