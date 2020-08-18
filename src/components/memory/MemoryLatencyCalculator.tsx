import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import NumberField from '@components/common/NumberField';
import SelectField from '@components/common/SelectField';
import { isEqual } from 'lodash-es';
import { ValueOf } from '@utils/types.util';



const sdramTypeOf = (name: string, multiplier: number) => {
    return {
        name,
        multiplier
    }
};

const memoryLatencyPresetOf = (type: ValueOf<typeof SDRAM_TYPE>, frequency: number, timing: number) => {
    return { type, frequency, timing };
};


const calculateClockCycleTime = (frequency: number, frequencyMultiplier: number): number => {
    return frequency / (frequencyMultiplier * 1000);
};

const calculateClockCyclesPerNs = (clockCycleTime: number): number => {
    return 1 / clockCycleTime;
};

const calculateLatency = (timing: number, clockCyclesPerNs: number): number => {
    return timing * clockCyclesPerNs;
};

const SDRAM_TYPE = {
    'SDR': sdramTypeOf('SDR', 1),
    'DDR': sdramTypeOf('DDR', 2),
};



const presets = [
    memoryLatencyPresetOf(SDRAM_TYPE.DDR, 2133, 10),
    memoryLatencyPresetOf(SDRAM_TYPE.DDR, 2400, 12),
    memoryLatencyPresetOf(SDRAM_TYPE.DDR, 3200, 16),
    memoryLatencyPresetOf(SDRAM_TYPE.DDR, 3600, 18),
];

const MemoryLatencyCalculator: React.FunctionComponent = () => {
    const [value, setValue] = useState(presets[2]);
    const { type, frequency, timing } = value;

    const clockCycleTime = calculateClockCycleTime(frequency, type.multiplier);
    const clockCyclesPerNs = calculateClockCyclesPerNs(clockCycleTime);
    const latency = calculateLatency(timing, clockCyclesPerNs);

    const handleTypeChange = (val: ValueOf<typeof SDRAM_TYPE>) => {
        setValue(value => ({ ...value, type: val }));
    };

    const handleFrequencyChange = (val?: number) => {
        setValue(value => ({ ...value, frequency: val || NaN }));
    };

    const handleTimingChange = (val?: number) => {
        setValue(value => ({ ...value, timing: val || NaN }));
    };

    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <SelectField
                        label="Presets"
                        value={value}
                        options={presets}
                        renderOption={preset => `${preset.type.name}-${preset.frequency} CL${preset.timing}`}
                        onValueChange={setValue}
                        valueComparator={isEqual}
                    >
                        Custom
                    </SelectField>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <SelectField
                                label="Typ"
                                value={value.type}
                                options={[SDRAM_TYPE.SDR, SDRAM_TYPE.DDR]}
                                renderOption={type => type.name}
                                onValueChange={handleTypeChange}
                            />
                        </Grid>
                        <Grid item>
                            <NumberField
                                label="Effektive Taktfrequenz"
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
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default MemoryLatencyCalculator;
