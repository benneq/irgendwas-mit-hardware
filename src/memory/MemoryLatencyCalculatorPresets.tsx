import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export type MemoryType = "SDR" | "DDR";

export type MemoryLatencyPreset = {
    type: MemoryType
    frequency: number
    timing: number
}

const presets: MemoryLatencyPreset[] = [
    { type: 'DDR', frequency: 2133, timing: 10 },
    { type: 'DDR', frequency: 2400, timing: 12 },
    { type: 'DDR', frequency: 3200, timing: 16 },
    { type: 'DDR', frequency: 3600, timing: 18 },
];

type Props = {
    onChange: (val: typeof presets[number]) => void
};

const MemoryLatencyCalculatorPresets: React.FunctionComponent<Props> = (props) => {
    const [presetIdx, setPresetIdx] = useState(2);

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        const presetIdx = e.target.value as number;
        setPresetIdx(presetIdx);
        const preset = presets[presetIdx];
        props.onChange(preset);
    };

    return (
        <FormControl>
            <InputLabel id="demo-simple-select-label">Presets</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={presetIdx}
                onChange={handleChange}
            >
                {presets.map((preset, i) => <MenuItem key={i} value={i}>{preset.type} {preset.frequency}MHz CL{preset.timing}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default MemoryLatencyCalculatorPresets;
