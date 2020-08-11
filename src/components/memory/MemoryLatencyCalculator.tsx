import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '../common/NumberField';
import { MemoryLatencyPreset } from './model/memory-latency-preset.model';
import { MemoryType } from './model/memory-type.model';
import { memoryLatencyPresetOf, calculateFrequencyMultiplier, calculateClockCycleTime, calculateClockCyclesPerNs, calculateLatency } from './util/memory-latency.util';
import SelectField from '../common/SelectField';
import { isEqual } from 'lodash-es';


const presets = [
    memoryLatencyPresetOf('DDR', 2133, 10),
    memoryLatencyPresetOf('DDR', 2400, 12),
    memoryLatencyPresetOf('DDR', 3200, 16),
    memoryLatencyPresetOf('DDR', 3600, 18),
];

const MemoryLatencyCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState<MemoryLatencyPreset>(presets[2]);
    const { type, frequency, timing } = value;

    const frequencyMultiplier = calculateFrequencyMultiplier(type);
    const clockCycleTime = calculateClockCycleTime(frequency, frequencyMultiplier);
    const clockCyclesPerNs = calculateClockCyclesPerNs(clockCycleTime);
    const latency = calculateLatency(timing, clockCyclesPerNs);
    const bandwidth = 64*frequency/frequencyMultiplier/8/1000;

    const handleTypeChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        setValue(value => ({ ...value, type: e.target.value as MemoryType }));
    };

    const handleFrequencyChange = (val?: number) => {
        setValue(value => ({ ...value, frequency: val || NaN }));
    };

    const handleTimingChange = (val?: number) => {
        setValue(value => ({ ...value, timing: val || NaN }));
    };

    return (
        <>
            <Grid container>
                <Grid item>
                    <SelectField
                        label="Presets"
                        value={value}
                        options={presets}
                        renderOption={preset => `${preset.type} ${preset.frequency}MHz CL${preset.timing}`}
                        onValueChange={setValue}
                        valueComparator={isEqual}
                    >
                        Custom
                    </SelectField>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item>
                    <SelectField<MemoryType>
                        label="Typ"
                        value={type}
                        options={["SDR", "DDR"]}
                        onChange={handleTypeChange}
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        label="Speichertakt"
                        helperText="In MHz"
                        value={frequency}
                        onValueChange={handleFrequencyChange}
                        allowNegative={false}
                    />
                </Grid>
                <Grid item>
                    <NumberField
                        label="Taktzyklusdauer"
                        helperText="In ns"
                        disabled
                        value={clockCycleTime}
                        allowNegative={false}
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
                        onValueChange={handleTimingChange}
                        allowNegative={false}
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
                    <NumberField
                        label="Bandbreite (pro Modul)"
                        helperText="In GB/sec"
                        disabled
                        value={bandwidth}
                        allowNegative={false}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default MemoryLatencyCalculator;
