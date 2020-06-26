import React, { useState } from 'react';
import { Grid, InputAdornment } from '@material-ui/core';
import MemoryLatencyCalculatorPresets, { MemoryLatencyPreset } from './MemoryLatencyCalculatorPresets';
import NumberField from '../util/NumberField';

const MemoryLatencyCalculator: React.FunctionComponent = () => {
    const [frequency, setFrequency] = useState(3200);
    const [timing, setTiming] = useState(16);

    const latency = (1000 * 2 * timing) / frequency;

    const handlePresetChange = (val: MemoryLatencyPreset) => {
        setFrequency(val.frequency);
        setTiming(val.timing);
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <NumberField
                    label="Speichertakt (MHz)"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">MHz</InputAdornment>
                    }}
                    value={frequency}
                    onChange={e => setFrequency(e.target.value)}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Timing"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">CL</InputAdornment>
                    }}
                    value={timing}
                    onChange={e => setTiming(e.target.value)}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Latenz"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">ns</InputAdornment>
                    }}
                    disabled
                    value={latency}
                />
            </Grid>
            <Grid item>
                <MemoryLatencyCalculatorPresets onChange={handlePresetChange} />
            </Grid>
        </Grid>
    );
};

export default MemoryLatencyCalculator;
