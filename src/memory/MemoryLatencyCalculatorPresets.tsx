import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { MemoryLatencyPreset } from './model/memory-latency-preset.model';

const presets: MemoryLatencyPreset[] = [
    { type: 'DDR', frequency: 2133, timing: 10 },
    { type: 'DDR', frequency: 2400, timing: 12 },
    { type: 'DDR', frequency: 3200, timing: 16 },
    { type: 'DDR', frequency: 3600, timing: 18 },
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
