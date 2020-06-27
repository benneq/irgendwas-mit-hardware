import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { MemoryLatencyPreset } from './model/memory-latency-preset.model';
import { memoryLatencyPresetOf } from './util/memory-latency.util';

const presets = [
    memoryLatencyPresetOf('DDR', 2133, 10),
    memoryLatencyPresetOf('DDR', 2400, 12),
    memoryLatencyPresetOf('DDR', 3200, 16),
    memoryLatencyPresetOf('DDR', 3600, 18),
];

type Props = {
    value: MemoryLatencyPreset
    onChange: (val: MemoryLatencyPreset) => void
};

const MemoryLatencyCalculatorPresets: React.FunctionComponent<Props> = (props) => {
    const { value, onChange } = props;

    const presetIdx = presets.findIndex(preset => preset.type === value.type && preset.frequency === value.frequency && preset.timing === value.timing);

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        const preset = presets[e.target.value as number];
        onChange(preset);
    };

    return (
        <FormControl>
            <InputLabel>Presets</InputLabel>
            <Select
                value={presetIdx}
                onChange={handleChange}
            >
                <MenuItem disabled value={-1}>Custom</MenuItem>
                {presets.map((preset, i) => <MenuItem key={i} value={i}>{preset.type} {preset.frequency}MHz CL{preset.timing}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default MemoryLatencyCalculatorPresets;
