import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NumberFormatter from '../util/NumberFormatter';
import PositiveIntegerField from '../util/PositiveIntegerField';


const DisplayBandwidthCalculator: React.FunctionComponent = () => {
    const [horizontalResolution, setHorizontalResolution] = useState(1920);
    const [verticalResolution, setVerticalResolution] = useState(1080);
    const [refreshRate, setRefreshRate] = useState(60);
    const [colorDepth, setColorDepth] = useState(8);
    const [bandwidth, setBandwidth] = useState(0);

    const handleHorizontalResolutionChange = (val?: number) => {
        setHorizontalResolution(val || NaN);
    };

    const handleVerticalResolutionChange = (val?: number) => {
        setVerticalResolution(val || NaN);
    };

    const handleRefreshRateChange = (val?: number) => {
        setRefreshRate(val || NaN);
    };

    const handleColorDepthChange = (val?: number) => {
        setColorDepth(val || NaN);
    };

    useEffect(() => {
        const bandwidth = horizontalResolution * verticalResolution * refreshRate * 3 * colorDepth;
        setBandwidth(bandwidth);
    }, [horizontalResolution, verticalResolution, refreshRate, colorDepth]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <PositiveIntegerField
                        value={horizontalResolution}
                        onValueChange={handleHorizontalResolutionChange}
                        label="Horizontale Auflösung"
                        helperText="in Pixel"
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        value={verticalResolution}
                        onValueChange={handleVerticalResolutionChange}
                        label="Vertikale Auflösung"
                        helperText="in Pixel"
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        value={refreshRate}
                        onValueChange={handleRefreshRateChange}
                        label="Bildwiederholrate"
                        helperText="in Hz"
                    />
                </Grid>
                <Grid item>
                    <PositiveIntegerField
                        value={colorDepth}
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
