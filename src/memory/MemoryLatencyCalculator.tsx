import React, { useState } from 'react';
import { Grid, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import MemoryLatencyCalculatorPresets, { MemoryLatencyPreset, MemoryType } from './MemoryLatencyCalculatorPresets';
import NumberField from '../util/NumberField';

const MemoryLatencyCalculator: React.FunctionComponent = () => {
    const [type, setType] = useState<MemoryType>('DDR');
    const [frequency, setFrequency] = useState(3200);
    const [timing, setTiming] = useState(16);

    const clockCycleTime = type === "SDR" ? frequency / 1000 : frequency / 2000;
    const clockCyclesPerNs = 1 / clockCycleTime;
    const latency = timing * clockCyclesPerNs;

    const handleTypeChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        setType(e.target.value as MemoryType)
    };

    const handlePresetChange = (val: MemoryLatencyPreset) => {
        setType(val.type);
        setFrequency(val.frequency);
        setTiming(val.timing);
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Presets</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        onChange={handleTypeChange}
                    >
                        <MenuItem value="SDR">SDR</MenuItem>
                        <MenuItem value="DDR">DDR</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <NumberField
                    label="Speichertakt"
                    helperText="In MHz"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">MHz</InputAdornment>
                    }}
                    value={frequency}
                    onChange={e => setFrequency(e.target.value)}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Taktzyklusdauer"
                    helperText="In ns"
                    disabled
                    value={clockCycleTime}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Taktzyklen pro ns"
                    helperText="Taktzyklen"
                    disabled
                    value={clockCyclesPerNs}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Timing"
                    helperText="Taktzyklen"
                    value={timing}
                    onChange={e => setTiming(e.target.value)}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Latenz"
                    helperText="In ns"
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
