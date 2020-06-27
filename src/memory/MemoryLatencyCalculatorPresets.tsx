import React from 'react';
import { MemoryLatencyPreset } from './model/memory-latency-preset.model';
import { memoryLatencyPresetOf } from './util/memory-latency.util';
import SelectField from '../util/SelectField';

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

    const selectedPreset = presets.find(preset => preset.type === value.type && preset.frequency === value.frequency && preset.timing === value.timing)!;

    const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
        onChange(e.target.value as MemoryLatencyPreset);
    };

    return (
        <SelectField<MemoryLatencyPreset>
            label="Presets"
            value={selectedPreset}
            options={presets}
            renderOption={preset => `${preset.type} ${preset.frequency}MHz CL${preset.timing}`}
            onChange={handleChange}
        >
            Custom
        </SelectField>
    );
};

export default MemoryLatencyCalculatorPresets;
