import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import MemoryLatencyCalculatorPresets from './MemoryLatencyCalculatorPresets';
import NumberField from '../util/NumberField';
import { MemoryLatencyPreset } from './model/memory-latency-preset.model';
import { MemoryType } from './model/memory-type.model';
import { memoryLatencyPresetOf, calculateFrequencyMultiplier, calculateClockCycleTime, calculateClockCyclesPerNs, calculateLatency } from './util/memory-latency.util';

const MemoryLatencyCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState<MemoryLatencyPreset>(memoryLatencyPresetOf('DDR', 3200, 16));
    const { type, frequency, timing } = value;

    const frequencyMultiplier = calculateFrequencyMultiplier(type);
    const clockCycleTime = calculateClockCycleTime(frequency, frequencyMultiplier);
    const clockCyclesPerNs = calculateClockCyclesPerNs(clockCycleTime);
    const latency = calculateLatency(timing, clockCyclesPerNs);

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
                    <InputLabel>Typ</InputLabel>
                    <Select
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
                    value={frequency}
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
                    value={timing}
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
