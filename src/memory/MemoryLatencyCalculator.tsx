import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import MemoryLatencyCalculatorPresets, { MemoryLatencyPreset, MemoryType } from './MemoryLatencyCalculatorPresets';
import NumberField from '../util/NumberField';

const MemoryLatencyCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState<MemoryLatencyPreset>({ type: 'DDR', frequency: 3200, timing: 16 });

    const clockCycleTime = value.type === "SDR" ? value.frequency / 1000 : value.frequency / 2000;
    const clockCyclesPerNs = 1 / clockCycleTime;
    const latency = value.timing * clockCyclesPerNs;

    const handleTypeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, type: e.target.value as MemoryType}));
    };

    const handleFrequencyChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, frequency: e.target.value as number}));
    };

    const handleTimingChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(val => ({...val, timing: e.target.value as number}));
    };

    const handlePresetChange = (val: MemoryLatencyPreset) => {
        setValue(val);
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <FormControl>
                    <InputLabel>Presets</InputLabel>
                    <Select
                        value={value.type}
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
                    value={value.frequency}
                    onChange={handleFrequencyChange}
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
                    value={value.timing}
                    onChange={handleTimingChange}
                />
            </Grid>
            <Grid item>
                <NumberField
                    label="Effektive Latenz"
                    helperText="In ns"
                    disabled
                    value={latency}
                />
            </Grid>
            <Grid item>
                <MemoryLatencyCalculatorPresets
                    value={value}
                    onChange={handlePresetChange}
                />
            </Grid>
        </Grid>
    );
};

export default MemoryLatencyCalculator;
